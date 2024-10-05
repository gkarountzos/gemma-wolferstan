"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

const DotBackground = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        //background color
        "relative h-fit items-center bg-gradient-to-t from-[#ffffff] from-30% via-[#2f1655] from 80% to-[#4E2780] to 95% justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      {/* dots color */}
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-rose-200 pointer-events-none opacity-60" />
      <motion.div
        //glow effect color
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-white absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export default DotBackground;
