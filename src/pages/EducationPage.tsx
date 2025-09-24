import { useTranslation } from "react-i18next";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { listEducation } from "../utils/Constans";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black) px-2 md:px-0">
        <h1 className="font-barlow max-w-[370px] text-3xl md:text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          {t("education.title")}
        </h1>
        <p className="text-base md:text-lg mt-4 max-w-[600px] leading-6 font-light">
          {t("education.description")}
        </p>
      </div>

      <div className="mt-8 space-y-4 md:space-y-6 px-2 md:px-0">
        {listEducation.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-4 p-4 md:p-6 rounded-2xl md:rounded-3xl bg-(--bg-tertiary-cray) shadow-lg transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-xl"
          >
            <div className="flex items-start justify-between max-md:flex-col max-md:gap-4">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-(--text-color-black) mb-2">
                  {t(`education.items.${index}.degree`)}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-(--text-color-black) mb-2">
                  {t(`education.items.${index}.institution`)}
                </h4>
                <p className="text-base md:text-lg text-(--text-color-grey) mb-3">
                  {t(`education.items.${index}.period`)}
                </p>
                <p className="text-sm md:text-base leading-6 text-(--text-color-black)">
                  {t(`education.items.${index}.description`)}
                </p>
              </div>
              
              <div className="flex-shrink-0 ml-4 md:ml-6 max-md:ml-0">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl bg-white p-2 shadow-md"
                />
              </div>
            </div>

            {item.achievements && (
              <div className="mt-4 pt-4 border-t border-(--bg-primary-cray)">
                <h5 className="text-base md:text-lg font-semibold text-(--text-color-black) mb-2">
                  {t("education.achievements")}
                </h5>
                <ul className="list-disc list-inside space-y-1">
                  {item.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm md:text-base text-(--text-color-black)">
                      {t(`education.items.${index}.achievements.${achIndex}`)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPage;