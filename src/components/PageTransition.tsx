"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const page = {
  initial: { x: 60, opacity: 0, filter: "blur(8px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: -60, opacity: 0, filter: "blur(8px)" },
};

const overlay = {
  initial: { opacity: 0.0 },
  animate: { opacity: 0.0 },
  exit: { opacity: 0.0 },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={pathname} className="relative">
        {/* cinematic overlay flash */}
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9998] bg-black"
          variants={overlay}
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 0.0 }}
          exit={{ opacity: 0.25 }}
          transition={{ duration: 0.25 }}
        />

        <motion.div
          variants={page}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: "transform, opacity, filter" }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
