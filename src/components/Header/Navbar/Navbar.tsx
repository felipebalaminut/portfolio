import { Select } from "./Select";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../utils/translates";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuButton } from "./MenuButton";

export function Navbar() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="container py-8 flex items-center justify-between xl:flex-column">
      <p className="text-development">###</p>

      <MenuButton onClick={toggleMenu} open={open} />

      {/* Escurecendo */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-20"
          onClick={closeMenu}
        ></div>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.25,
            }}
            className="fixed top-0 right-0 bg-surface-primary px-8 py-24 h-screen w-68 z-30"
          >
            <ul className="flex flex-col items-center gap-12 [&>li]:text-white [&>li]:text-base">
              <li>
                <a href="">{translations[language].header.nav.Item1}</a>
              </li>
              <li>
                <a href="">{translations[language].header.nav.Item2}</a>
              </li>
              <li>
                <Select />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="hidden md:flex items-center gap-12 [&>li]:text-white [&>li]:text-base">
        <li className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-accent-primary  after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
          <a href="">{translations[language].header.nav.Item1}</a>
        </li>
        <li className="relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-accent-primary  after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">
          <a href="">{translations[language].header.nav.Item2}</a>
        </li>
        <li>
          <Select />
        </li>
      </ul>
    </nav>
  );
}
