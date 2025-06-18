"use client";

import { motion } from "framer-motion";
import { Button } from "./button";

const MotionDiv = motion.div as React.ComponentType<{
  children?: React.ReactNode;
  [key: string]: any;
}>;

const MotionSpan = motion.span as React.ComponentType<{
  children?: React.ReactNode;
  [key: string]: any;
}>;

export function FloatingPaths({
  position,
  direction = "left",
}: {
  position: number;
  direction?: "left" | "right" | "bottom-right";
}) {
  // const paths = Array.from({ length: 36 }, (_, i) => ({
  //   id: i,
  //   d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
  //     380 - i * 5 * position
  //   } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
  //     152 - i * 5 * position
  //   } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
  //     684 - i * 5 * position
  //   } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
  //   color: `rgba(15,23,42,${0.1 + i * 0.03})`,
  //   width: 0.5 + i * 0.03,
  // }));

  // const paths = Array.from({ length: 36 }, (_, i) => {
  //   // Base coordinates
  //   const x1 =
  //     direction === "left" ? -(380 - i * 5 * position) : 684 - i * 5 * position;
  //   const x2 =
  //     direction === "left" ? -(312 - i * 5 * position) : 616 - i * 5 * position;
  //   const x3 =
  //     direction === "left" ? 152 - i * 5 * position : 152 + i * 5 * position;
  //   const x4 =
  //     direction === "left" ? 616 - i * 5 * position : -(312 + i * 5 * position);
  //   const x5 =
  //     direction === "left" ? 684 - i * 5 * position : -(380 + i * 5 * position);

  //   return {
  //     id: i,
  //     d: `M${x1} -${189 + i * 6}C${x1} -${189 + i * 6} ${x2} ${
  //       216 - i * 6
  //     } ${x3} ${343 - i * 6}C${x4} ${470 - i * 6} ${x5} ${875 - i * 6} ${x5} ${
  //       875 - i * 6
  //     }`,
  //     color: `rgba(15,23,42,${0.1 + i * 0.03})`,
  //     width: 0.5 + i * 0.03,
  //   };
  // });

  const paths = Array.from({ length: 36 }, (_, i) => {
    // Common vertical movement
    const y1 = -(189 + i * 6);
    const y2 = 216 - i * 6;
    const y3 = 343 - i * 6;
    const y4 = 470 - i * 6;
    const y5 = 875 - i * 6;

    // Calculate X coordinates based on direction
    let x1, x2, x3, x4, x5;

    if (direction === "left") {
      x1 = -(380 - i * 5 * position);
      x2 = -(312 - i * 5 * position);
      x3 = 152 - i * 5 * position;
      x4 = 616 - i * 5 * position;
      x5 = 684 - i * 5 * position;
    } else if (direction === "right") {
      x1 = 684 - i * 5 * position;
      x2 = 616 - i * 5 * position;
      x3 = 152 + i * 5 * position;
      x4 = -(312 + i * 5 * position);
      x5 = -(380 + i * 5 * position);
    } else {
      // bottom-right
      x1 = -(200 - i * 5 * position);
      x2 = -(100 - i * 5 * position);
      x3 = 100 + i * 5 * position;
      x4 = 300 + i * 5 * position;
      x5 = 400 + i * 5 * position;
    }

    // Adjust Y coordinates for bottom-right direction
    const adjustedY1 = direction === "bottom-right" ? 100 + i * 6 : y1;
    const adjustedY2 = direction === "bottom-right" ? 200 + i * 6 : y2;
    const adjustedY3 = direction === "bottom-right" ? 300 + i * 6 : y3;
    const adjustedY4 = direction === "bottom-right" ? 400 + i * 6 : y4;
    const adjustedY5 = direction === "bottom-right" ? 800 + i * 6 : y5;

    return {
      id: i,
      d: `M${x1} ${adjustedY1}C${x1} ${adjustedY1} ${x2} ${adjustedY2} ${x3} ${adjustedY3}C${x4} ${adjustedY4} ${x5} ${adjustedY5} ${x5} ${adjustedY5}`,
      color: `rgba(15,23,42,${0.1 + i * 0.03})`,
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
}: {
  title?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <MotionSpan
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                                        dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </MotionSpan>
                ))}
              </span>
            ))}
          </h1>

          <div
            className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
                        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Button
              variant="ghost"
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                            bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                Discover Excellence
              </span>
              <span
                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
              >
                →
              </span>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
