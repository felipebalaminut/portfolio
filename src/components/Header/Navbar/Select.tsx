import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../utils/translates";

export function Select() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleDropDown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleChange = (lang: "pt" | "en") => {
    setLanguage(lang);
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropDown}
        className="justify-center gap-1 w-36 py-2 px-4 flex md:justify-between items-center rounded cursor-pointer bg-accent-primary hover:bg-accent-primary-hover"
      >
        <span>{translations[language].header.select.current}</span>
        {!open ? (
          <img src="/src/assets/arrow-down.svg" alt="arrow-down-icon" />
        ) : (
          <img src="/src/assets/arrow-up.svg" alt="arrow-up-icon" />
        )}
      </button>

      {open && (
        <ul className="absolute w-full mt-0.5 rounded border-1 border-accent-primary [&>li]:hover:bg-accent-primary [&>li]:cursor-pointer overflow-hidden">
          <li onClick={() => handleChange("pt")} className="px-4 py-1">
            {translations[language].header.select.option1}
          </li>
          <li onClick={() => handleChange("en")} className="px-4 py-1">
            {translations[language].header.select.option2}
          </li>
        </ul>
      )}
    </div>
  );
}
