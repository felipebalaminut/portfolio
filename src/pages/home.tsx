import { Header } from "../components/Header/Header";

import { LanguageProvider } from "../context/LanguageContext";

export function Home() {
  return (
    <div>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    </div>
  );
}