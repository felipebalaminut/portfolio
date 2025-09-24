import { translations } from "../../utils/translates";
import { useLanguage } from "../../context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className="container py-16 text-center xl:text-start">
      <div className="flex flex-col gap-4 [&_span]:text-accent-primary">
        <h3 className="text-2xl xl:text-4xl font-medium">
          <span>{translations[language].header.main.hello_span}</span>
          {translations[language].header.main.hello}
        </h3>
        <h1 className="text-[40px] xl:text-[80px] font-bold">
          {translations[language].header.main.name}
        </h1>
        <p className="xl:text-xl font-medium">
          <span>{translations[language].header.main.career}</span>
          {translations[language].header.main.phrase}
        </p>
      </div>

      <div></div>
    </section>
  );
}
