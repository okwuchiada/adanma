import type React from "react";

import { MotionProps, motion } from "framer-motion";
import { Card } from "./ui/card";

type CardProps = React.ComponentProps<typeof Card>;

type AnimatedCardProps = CardProps &
  MotionProps & {
    children: React.ReactNode;
    className?: string;
  };

const MotionCard = motion(Card);
// const MotionCard = motion<CardProps & MotionProps>(Card);

export function AnimatedCard({
  children,
  className = "",
  ...props
}: AnimatedCardProps) {
  return (
    <MotionCard
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </MotionCard>
  );
}
