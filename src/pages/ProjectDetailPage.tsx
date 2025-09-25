import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { listProjects } from "../utils/Constans";
import { IoArrowBack, IoCodeSlash, IoEye } from "react-icons/io5";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const projectIndex = parseInt(id || "0");
  const project = listProjects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-(--text-color-black)">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/projects")}
            className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-6 py-3 hover:bg-(--bg-secondary-cray) transition-all duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col gap-4 overflow-x-hidden p-4">


      {/* Banner Image */}
      <section className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={project.background}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Tech Stack Overlay */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          {project.list_tech.map((tech, index) => (
            <div
              key={index}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="mt-8 text-left text-(--text-color-black) px-2 md:px-4">
        <h1 className="font-barlow text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          {t(`projects.project${projectIndex + 1}.title`)}
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Description */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-base md:text-lg leading-7 text-(--text-color-black) mb-6">
              {t(`projects.project${projectIndex + 1}.desc`)}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.list_tech.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-(--bg-tertiary-cray) border border-(--bg-secondary-cray)"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:w-80 flex flex-col gap-4">
            <div className="bg-(--bg-tertiary-cray) rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4">Project Links</h3>
              
              <div className="space-y-3">
                <button
                  className="w-full flex items-center justify-center gap-3 cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-6 py-3 hover:bg-(--bg-secondary-cray) transition-all duration-300"
                  onClick={() => window.open(project.sourceUrl || "#", "_blank")}
                >
                  <IoCodeSlash className="text-xl" />
                  <span className="font-medium">Source Code</span>
                </button>
                
                <button
                  className="w-full flex items-center justify-center gap-3 cursor-pointer rounded-full bg-(--bg-secondary-cray) px-6 py-3 hover:bg-(--bg-primary-cray) transition-all duration-300"
                  onClick={() => window.open(project.demoUrl || "#", "_blank")}
                >
                  <IoEye className="text-xl" />
                  <span className="font-medium">Live Demo</span>
                </button>
              </div>
            </div>

            {/* Project Stats */}
            <div className="bg-(--bg-tertiary-cray) rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4">Project Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-(--text-color-grey)">Status:</span>
                  <span className="font-medium">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--text-color-grey)">Duration:</span>
                  <span className="font-medium">3 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-(--text-color-grey)">Team Size:</span>
                  <span className="font-medium">Solo Project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailPage;