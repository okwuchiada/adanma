"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionProps } from "framer-motion";

export type RevealMotionDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale";

export const RevealMotionVariants: Record<
  RevealMotionDirection,
  MotionProps["variants"]
> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface RevealMotionProps extends MotionProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  direction?: RevealMotionDirection;
  className?: string;
}

const MotionDiv = motion.div as React.ComponentType<{
  children?: React.ReactNode;
  [key: string]: any;
}>;

export function RevealMotion({
  children,
  width = "fit-content",
  delay = 0,
  duration,
  direction = "up",
  className,
  ...rest
}: RevealMotionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // 5️⃣ Default duration per direction
  const defaultDurations: Record<RevealMotionDirection, number> = {
    up: 0.5,
    down: 0.5,
    left: 0.6,
    right: 0.6,
    fade: 0.4,
    scale: 0.5,
  };

  //   const MotionDiv = motion.div;

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }}>
      <MotionDiv
        className={className}
        variants={RevealMotionVariants[direction]}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{
          duration: duration ?? defaultDurations[direction],
          delay,
        }}
        {...rest}
      >
        {children}
      </MotionDiv>
    </div>
  );
}

{
  /* <motion.div variants={RevealMotionVariants.right} ... /> */
}
