import { useTranslation } from "react-i18next";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { listEducation } from "../utils/Constans";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-12">
      <HeroBanner />

      {/* Header Section */}
      <div className="mt-14 px-4 md:px-6 lg:px-8">
        <h1 className="font-barlow text-3xl md:text-4xl font-bold text-[var(--text-color-black)] max-w-prose">
          {t("education.title")}
        </h1>
        <p className="mt-4 text-base md:text-lg text-[var(--text-color-black)] font-light leading-relaxed max-w-2xl">
          {t("education.description")}
        </p>
      </div>

      {/* Education List */}
      <div className="mt-10 space-y-6 px-4 md:px-6 lg:px-8">
        {listEducation.map((item, index) => (
          <div
            key={index}
            className="relative p-5 md:p-6 rounded-2xl bg-[var(--bg-tertiary-cray)] shadow-sm transition-all duration-300 ease-in-out hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-5">
              {/* Konten Utama */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-color-black)]">
                  {t(`education.items.${index}.degree`)}
                </h3>
                <h4 className="mt-1 text-lg md:text-xl font-semibold text-[var(--text-color-black)]">
                  {t(`education.items.${index}.institution`)}
                </h4>
                <p className="mt-2 text-base text-[var(--text-color-grey)]">
                  {t(`education.items.${index}.period`)}
                </p>
                <p className="mt-3 text-sm md:text-base text-[var(--text-color-black)] leading-relaxed">
                  {t(`education.items.${index}.description`)}
                </p>

                {/* Achievements */}
                {item.achievements && (
                  <div className="mt-5 pt-4 border-t border-[var(--bg-primary-cray)]">
                    <h5 className="text-base md:text-lg font-semibold text-[var(--text-color-black)]">
                      {t("education.achievements")}
                    </h5>
                    <ul className="mt-2 space-y-1.5 list-disc list-inside text-sm md:text-base text-[var(--text-color-black)]">
                      {item.achievements.map((_, achIndex) => (
                        <li key={achIndex}>
                          {t(`education.items.${index}.achievements.${achIndex}`)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex justify-center md:block">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-xl bg-white p-2 shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;