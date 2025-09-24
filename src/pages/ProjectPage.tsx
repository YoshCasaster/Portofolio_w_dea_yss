import { useState } from "react";
import { useTranslation } from "react-i18next";
import CardLarge from "../components/commons/atoms/CardLarge";
import Modal from "../components/commons/atoms/Modal";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { listProjects } from "../utils/Constans";

type Tech = {
  name: string;
  icon: string;
};

type Project = {
  title: string;
  desc: string;
  background: string;
  list_tech: Tech[];
};

const ProjectPage = () => {
  const [dataProject, setDataProject] = useState<Project | undefined>(undefined);
  const { t } = useTranslation();

  return (
    <>
      <section>
        <HeroBanner />
        <div className="mt-14 text-left text-(--text-color-black) px-2 md:px-0">
          <h1 className="font-barlow max-w-[370px] text-3xl md:text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
            {t("projects.title")}
          </h1>
          <p className="text-base md:text-lg mt-4 max-w-[600px] leading-6 font-light">
            {t("projects.description")}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:gap-6 px-2 md:px-0">
          {listProjects.map((item, index) => (
            <CardLarge
              key={index}
              img={item.background}
              index={index + 1}
              text={item.desc}
              title={item.title}
              tech={item.list_tech}
              projectId={index}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center px-2 md:px-0">
          <button
            className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 md:px-6 md:py-3 hover:bg-(--bg-secondary-cray) transition-all duration-300 text-sm md:text-base"
            onClick={() => {
              window.open("https://github.com/yoshcasaster", "_blank");
            }}
          >
            {t("projects.viewMore")}
          </button>
        </div>
      </section>

    </>
  );
};

export default ProjectPage;