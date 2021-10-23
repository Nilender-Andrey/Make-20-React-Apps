import React from 'react';
import { motion } from 'framer-motion';

type AnimatorPropsType = {
  children: React.ReactNode;
};

export default function Animator({ children }:AnimatorPropsType) {
  return (
    <motion.div
      style={{ position: 'absolute', transition: '0.2s' }}
      initial={{
        x: 300, scale: 0.7, opacity: 0,
      }}
      animate={{
        x: 0, scale: 1, opacity: 1,
      }}
      exit={{
        x: -300, scale: 0.7, opacity: 0,
      }}

    >
      {children}
    </motion.div>
  );
}
