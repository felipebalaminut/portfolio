import { motion } from "motion/react";

type TProps = {
  onClick: () => void;
  open: boolean;
};

export function MenuButton({ onClick, open }: TProps) {
  const topVariant = {
    open: { rotate: 45, y: 7.5 },
    closed: { rotate: 0, y: 0 },
  };

  const middleVariant = {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  };

  const bottomVariant = {
    open: { rotate: -45, y: -7.5 },
    closed: { rotate: 0, y: 0 },
  };

  return (
    <button
      onClick={onClick}
      className="md:hidden flex flex-col justify-between items-center h-4 z-40"
    >
      <motion.span
        className="w-6 h-0.5 bg-white inline-block"
        variants={topVariant}
        animate={open ? "open" : "closed"}
      ></motion.span>

      <motion.span
        className="w-6 h-0.5 bg-white inline-block"
        variants={middleVariant}
        animate={open ? "open" : "closed"}
      ></motion.span>

      <motion.span
        className="w-6 h-0.5 bg-white inline-block"
        variants={bottomVariant}
        animate={open ? "open" : "closed"}
      ></motion.span>
    </button>
  );
}
