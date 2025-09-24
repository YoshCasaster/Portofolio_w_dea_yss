import { useState } from "react";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/commons/molecules/HeroBanner";
import { listCertificates } from "../utils/Constans";

const CertificatePage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const { t } = useTranslation();

  return (
    <>
      <section>
        <HeroBanner />
        <div className="mt-14 text-left text-(--text-color-black)">
          <h1 className="font-barlow max-w-[370px] text-4xl font-bold max-xl:w-[300px] max-xl:text-3xl">
            {t("certificates.title")}
          </h1>
          <p className="text-lg mt-4 max-w-[600px] leading-6 font-light">
            {t("certificates.description")}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listCertificates.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-3xl overflow-hidden bg-(--bg-tertiary-cray) shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              onClick={() => setSelectedCertificate(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-(--text-color-black) mb-2 line-clamp-2">
                  {t(`certificates.items.${index}.title`)}
                </h3>
                <p className="text-md text-(--text-color-grey) mb-2">
                  {t(`certificates.items.${index}.issuer`)}
                </p>
                <p className="text-sm text-(--text-color-grey)">
                  {t(`certificates.items.${index}.date`)}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-(--bg-secondary-cray) rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-(--text-color-black)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-(--bg-tertiary-cray) rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-(--bg-secondary-cray) rounded-full flex items-center justify-center hover:bg-(--bg-primary-cray) transition-colors duration-300"
                onClick={() => setSelectedCertificate(null)}
              >
                <svg className="w-6 h-6 text-(--text-color-black)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-contain bg-white"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-(--text-color-black) mb-3">
                  {selectedCertificate.title}
                </h3>
                <p className="text-lg text-(--text-color-grey) mb-2">
                  {selectedCertificate.issuer}
                </p>
                <p className="text-md text-(--text-color-grey) mb-4">
                  {selectedCertificate.date}
                </p>
                {selectedCertificate.description && (
                  <p className="text-md text-(--text-color-black) leading-6">
                    {selectedCertificate.description}
                  </p>
                )}
                
                {selectedCertificate.credentialUrl && (
                  <div className="mt-6">
                    <button
                      className="cursor-pointer rounded-full border-2 border-(--bg-secondary-cray) px-6 py-3 hover:bg-(--bg-secondary-cray) transition-all duration-300"
                      onClick={() => window.open(selectedCertificate.credentialUrl, "_blank")}
                    >
                      {t("certificates.viewCredential")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CertificatePage;