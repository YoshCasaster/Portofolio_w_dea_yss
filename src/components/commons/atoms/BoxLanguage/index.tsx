import { FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const languages = [
  { id: "en", name: "EN" },
  { id: "id", name: "ID" },
];

const BoxLanguage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 text-sm font-semibold text-(--text-color-black)">
      <FaGlobe className="text-lg" />
      {languages.map((language) => (
        <p
          key={language.id}
          id={language.id}
          className={`cursor-pointer ${
            currentLang === language.id
              ? "opacity-100 font-semibold"
              : "opacity-75 hover:opacity-100"
          }`}
          onClick={() => i18n.changeLanguage(language.id)}
        >
          {language.name}
        </p>
      ))}
    </div>
  );
};

export default BoxLanguage;
