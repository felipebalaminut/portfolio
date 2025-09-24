import { Select } from "./Select";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../utils/translates";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuButton } from "./MenuButton";
import { NavItem } from "./NavItem";
import styles from "./NavItem.module.css";

export function Navbar() {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const closeMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <nav className="container py-8 flex items-center justify-between">
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
            className="fixed top-0 right-0 bg-surface-primary rounded-l-xl px-8 py-32 h-screen w-68 z-30"
          >
            <ul className="flex flex-col items-center gap-16 [&>li]:text-base">
              <NavItem className={`relative ${styles.navLink}`}>
                <a href="">{translations[language].header.nav.Item1}</a>
              </NavItem>
              <NavItem className={`relative ${styles.navLink}`}>
                <a href="">{translations[language].header.nav.Item2}</a>
              </NavItem>
              <NavItem>
                <Select />
              </NavItem>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <ul className="hidden md:flex items-center gap-12 [&>li]:text-base">
        <NavItem className={`relative ${styles.navLink}`}>
          <a href="">{translations[language].header.nav.Item1}</a>
        </NavItem>

        <NavItem className={`relative ${styles.navLink}`}>
          <a href="">{translations[language].header.nav.Item2}</a>
        </NavItem>

        <NavItem>
          <Select />
        </NavItem>
      </ul>
    </nav>
  );
}
