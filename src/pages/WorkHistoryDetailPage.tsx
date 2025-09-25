import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { listWorkHistory } from "../utils/Constans";
import { IoArrowBack, IoLocationOutline } from "react-icons/io5";

const WorkHistoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const workIndex = parseInt(id || "0");
  const work = listWorkHistory[workIndex];

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center text-(--text-color-black)">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Work History Not Found</h2>
          <button
            onClick={() => navigate("/work-history")}
            className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-6 py-3 hover:bg-(--bg-secondary-cray) transition-all duration-300"
          >
            Back to Work History
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="relative mx-auto box-border flex min-h-screen w-full max-w-[1444px] flex-col gap-4 overflow-x-hidden p-4">


        {/* Banner Image */}
        <section className="relative h-[250px] md:h-[350px] lg:h-[450px] w-full rounded-3xl overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={work.banner}
            alt={work.company}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Company Profile Overlay */}
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-4">
            <img
              src={work.logo}
              alt={work.company}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="text-white">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {t(`workHistory.items.${workIndex}.company`)}
              </h1>
              <p className="text-sm md:text-base opacity-90">
                {t(`workHistory.items.${workIndex}.position`)}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-8 text-left text-(--text-color-black) px-2 md:px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex-1">
                  <p className="text-sm md:text-base text-(--text-color-grey) mb-2">
                    {t(`workHistory.items.${workIndex}.period`)}
                  </p>
                  <button
                    className="flex items-center gap-2 cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-4 py-2 hover:bg-(--bg-secondary-cray) transition-all duration-300 text-sm md:text-base"
                    onClick={() => window.open(work.companyUrl || "#", "_blank")}
                  >
                    <IoLocationOutline className="text-lg" />
                    <span>Company Address</span>
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Job Description</h2>
                <p className="text-base md:text-lg leading-7 text-(--text-color-black)">
                  {t(`workHistory.items.${workIndex}.description`)}
                </p>
              </div>

              {/* Work Gallery */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-semibold mb-4">Work Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {work.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Work gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 flex flex-col gap-4">
              <div className="bg-(--bg-tertiary-cray) rounded-3xl p-4 md:p-6">
                <h3 className="text-lg font-semibold mb-4">Work Details</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-(--text-color-grey)">Duration:</span>
                    <span className="font-medium">{work.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-(--text-color-grey)">Type:</span>
                    <span className="font-medium">{work.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-(--text-color-grey)">Location:</span>
                    <span className="font-medium">{work.location}</span>
                  </div>
                </div>
              </div>

              {work.achievements && (
                <div className="bg-(--bg-tertiary-cray) rounded-3xl p-4 md:p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    {work.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-(--bg-secondary-cray) rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-(--bg-secondary-cray) transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WorkHistoryDetailPage;