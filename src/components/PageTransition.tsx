"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  initial: { x: 50, opacity: 0, filter: "blur(8px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: -50, opacity: 0, filter: "blur(8px)" },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity, filter" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
