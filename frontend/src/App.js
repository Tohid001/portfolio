import React from "react";
import { motion } from "framer-motion";

const boxVariants = {
  out: {
    scaleX: 1,
    scaleY: 0,
  },
  in: {
    scaleY: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.8,
      // when: "beforeChildren",
      // The next sibling will appear 0.5s after the previous one
      staggerChildren: 0.5,
      // staggerDirection: -1,
    },
  },
};

const iconVariants = {
  out: {
    x: -600,
  },
  in: {
    x: 0,
  },
};

function App() {
  return (
    <div>
      <motion.div
        style={{
          transformOrigin: "bottom",
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          background: "pink",
          // transform: "translateY(200px)",
        }}
        variants={boxVariants}
        initial="out"
        animate="in"
      >
        <motion.span
          style={{
            fontSize: "2rem",
          }}
          role="img"
          aria-labelledby="magic wand"
          variants={iconVariants}
        >
          🚀
        </motion.span>
        <motion.span
          style={{
            fontSize: "2rem",
          }}
          role="img"
          aria-labelledby="sparkles"
          variants={iconVariants}
        >
          ✨
        </motion.span>
        <motion.span
          style={{
            fontSize: "2rem",
          }}
          role="img"
          aria-labelledby="sparkles"
          variants={iconVariants}
        >
          🎉
        </motion.span>
      </motion.div>
      <div>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem lorem lorem lorem lorem lorem lorem lorem{" "}
      </div>
    </div>
  );
}

export default App;
