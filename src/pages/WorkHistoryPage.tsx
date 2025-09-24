import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { listWorkHistory } from "../utils/Constans";

const WorkHistoryPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section>
      <HeroBanner />
      <div className="mt-14 text-left text-(--text-color-black)">
        <h1 className="font-barlow max-w-[370px] text-3xl md:text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
          {t("workHistory.title")}
        </h1>
        <p className="text-base md:text-lg mt-4 max-w-[600px] leading-6 font-light">
          {t("workHistory.description")}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {listWorkHistory.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-3xl overflow-hidden bg-(--bg-tertiary-cray) shadow-lg transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl"
            onClick={() => navigate(`/work-history/${index}`)}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={item.banner}
                alt={item.company}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            <div className="p-4 md:p-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={item.logo}
                  alt={item.company}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-(--bg-secondary-cray)"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-(--text-color-black) line-clamp-1">
                    {t(`workHistory.items.${index}.company`)}
                  </h3>
                  <p className="text-sm md:text-base text-(--text-color-grey)">
                    {t(`workHistory.items.${index}.position`)}
                  </p>
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-(--text-color-grey) mb-2">
                {t(`workHistory.items.${index}.period`)}
              </p>
              
              <p className="text-sm md:text-base text-(--text-color-black) line-clamp-2 leading-5">
                {t(`workHistory.items.${index}.shortDesc`)}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-8 h-8 bg-(--bg-secondary-cray) rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-4 h-4 text-(--text-color-black)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkHistoryPage;