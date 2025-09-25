import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headline: "Empowering Digital Experiences Through Frontend Development",
      description:
        "I am a front-end web developer with a strong design sense, dedicated to transforming creative concepts into responsive and high-performance websites. From interactive UI/UX interfaces to smooth animations and scalable code, I help brands and creators build powerful digital experiences that truly connect with users.",
      codeStats: "Lines of Code & Counting",
      industrySummary:
        "Collaborated with clients in technology, gaming, and creative industries to build modern, responsive websites. Combining design precision with clean and scalable code to deliver outstanding frontend solutions.",
      discover: "Discover More",
      aboutUs: "About Me",
      desc_aboutUs: "Hello, I’m Yosep Wahyu D, often known as Yosh Casaster, a Frontend Web Developer with a passion for creating seamless, responsive, and visually engaging web experiences. My main focus is building user-centered interfaces using modern frameworks like React.js, supported by utility-first tools such as Tailwind CSS. With over 4 years of experience in frontend engineering, I specialize in creating fast-loading, accessible, and scalable websites that look and feel great across all devices. I take pride in blending clean code with meaningful design. Whether it’s implementing smooth GSAP animations or integrating immersive 3D interactions using Three.js, I approach every project with attention to performance, responsiveness, and creativity. More than just 'how it looks,' I deeply care about how it works—ensuring every UI component is efficient, intuitive, and reusable. Currently, I collaborate with creative teams, startups, and indie game developers to turn complex ideas into elegant, functional interfaces. I am always exploring new frontiers in web animation, motion design, and frontend architecture. Let’s build something amazing together.",

      projects: {
        project1: {
          title: "SATARUZ RPG | RPG WEBSITE",
          desc: "Implementation of a text-based RPG from WhatsApp BOT into a Website-based RPG with unique animations",
        },
        project2: {
          title: "LOVB APP",
          desc: "A Web-Based Application, LOVB is an expense tracking app to anticipate daily overspending, featuring monthly and yearly recaps",
        },
        project3: {
          title: "GMAIL MARKETING",
          desc: `Bulk Gmail Sending Software.
          - Store Gmail Accounts
          - Get Sending Logs
          - No Sending Limits`,
        },
        project4: {
          title: "WEB PERSONAL BRANDING",
          desc: `Personal Online Store Website.`,
        }
      },

      education: {
        title: "Education Background",
        description: "My academic journey and continuous learning path in computer science and web development, from formal education to professional certifications.",
        achievements: "Key Achievements",
        items: {
          0: {
            degree: "Bachelor of Informatics Engineering",
            institution: "Universitas Semarang",
            period: "2025",
            description: "Focused on Software Engineering and Web Development with specialization in Frontend Technologies.",
            achievements: {
              0: "Built a WhatsApp BOT for UMKM during KKN program",
              1: "Top 10 Writer at SINATTI",
            }
          },
          1: {
            degree: "Industrial Pharmacy",
            institution: "SMK Theresiana",
            period: "2020",
            description: "Focused on pharmaceutical industry and large-scale medicine production",
            achievements: {

            }
          }
        }
      },

      certificates: {
        title: "Certificates & Achievements",
        description: "Professional certifications and achievements that validate my expertise in web development, cloud computing, and user experience design.",
        viewCredential: "View Credential",
        items: {
          0: {
            title: "SINATTI 2025",
            issuer: "Sustainable Digital Transformation",
            date: "July 2025"
          },
          1: {
            title: "JMC TALK",
            issuer: "FRAMEWORK 101",
            date: "December 2020",
          },
          2: {
            title: "Coding Yourself",
            issuer: "Programming Your Own Uniqueness",
            date: "November 2020",
          },
          3: {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "September 2023"
          },
          4: {
            title: "Google UX Design Professional Certificate",
            issuer: "Google",
            date: "August 2023"
          },
          5: {
            title: "Tailwind CSS Mastery",
            issuer: "Tailwind Labs",
            date: "July 2023"
          }
        }
      },

      workHistory: {
        title: "Work History",
        description: "My professional journey and experience working with various companies, from startups to established agencies, building modern web applications and leading development teams.",
        items: {
          0: {
            company: "PT Vista Jaya Raya",
            position: "Desk Collection",
            period: "Jan 2024 - Oct 2024",
            shortDesc: "Negotiation and Customer Data Recap",
            description: "Conducted negotiations to achieve mutual goals and performed regular monthly data recap",
          },
          1: {
            company: "PT Global Multi Pharmalab",
            position: "Quality Control",
            period: "Mar 2020",
            shortDesc: "Maintaining Medicine Production Quality",
            description: "Testing raw materials, packaging materials, intermediate products, and finished products to ensure purity, safety, and effectiveness of medicines in accordance with standards and Good Manufacturing Practices",
          }
        }
      },

      projects: {
        title: "My Projects",
        description: "A collection of web development projects showcasing my skills in frontend technologies, responsive design, and user experience. Each project represents a unique challenge and learning opportunity.",
        viewMore: "View More on GitHub"
      },

      education: {
        title: "Education Background",
        description: "My academic journey and continuous learning path in computer science and web development, from formal education to professional certifications.",
        achievements: "Key Achievements",
        items: {
          0: {
            degree: "Bachelor of Computer Science",
            institution: "Universitas Indonesia",
            period: "2018 - 2022",
            description: "Focused on Software Engineering and Web Development with specialization in Frontend Technologies.",
            achievements: {
              0: "Graduated Magna Cum Laude with GPA 3.8/4.0",
              1: "Best Final Project Award for React.js Portfolio Platform",
              2: "Active member of Computer Science Student Association"
            }
          },
          1: {
            degree: "Frontend Development Bootcamp",
            institution: "Dicoding Indonesia",
            period: "2021",
            description: "Intensive 6-month program covering modern frontend technologies including React, Vue, and Angular.",
            achievements: {
              0: "Top 5% graduate with perfect score",
              1: "Built 10+ production-ready web applications",
              2: "Mentored 20+ junior developers"
            }
          },
          2: {
            degree: "High School - Science Major",
            institution: "SMA Negeri 1 Jakarta",
            period: "2015 - 2018",
            description: "Focused on Mathematics and Computer Science with early exposure to programming.",
            achievements: {
              0: "Valedictorian with GPA 9.8/10.0",
              1: "1st Place National Programming Olympiad",
              2: "Student Council President"
            }
          }
        }
      },

      certificates: {
        title: "Certificates & Achievements",
        description: "Professional certifications and achievements that validate my expertise in web development, cloud computing, and user experience design.",
        viewCredential: "View Credential",
        items: {
          0: {
            title: "React Developer Professional Certificate",
            issuer: "Meta (Facebook)",
            date: "December 2023"
          },
          1: {
            title: "Frontend Web Developer Expert",
            issuer: "Dicoding Indonesia",
            date: "November 2023"
          },
          2: {
            title: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            date: "October 2023"
          },
          3: {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "September 2023"
          },
          4: {
            title: "Google UX Design Professional Certificate",
            issuer: "Google",
            date: "August 2023"
          },
          5: {
            title: "Tailwind CSS Mastery",
            issuer: "Tailwind Labs",
            date: "July 2023"
          }
        }
      },

      workHistory: {
        title: "Work History",
        description: "My professional journey and experience working with various companies, from startups to established agencies, building modern web applications and leading development teams.",
        items: {
          0: {
            company: "Tech Innovate Solutions",
            position: "Senior Frontend Developer",
            period: "Jan 2022 - Present",
            shortDesc: "Leading frontend development for enterprise web applications using React.js and modern web technologies.",
            description: "As a Senior Frontend Developer at Tech Innovate Solutions, I lead the development of complex web applications for enterprise clients. My responsibilities include architecting scalable frontend solutions, mentoring junior developers, and collaborating with cross-functional teams to deliver high-quality products. I've successfully delivered 15+ projects, improved application performance by 40%, and established coding standards that increased team productivity."
          },
          1: {
            company: "Digital Creative Agency",
            position: "Frontend Developer", 
            period: "Mar 2020 - Dec 2021",
            shortDesc: "Developed responsive websites and web applications for various clients in creative and e-commerce industries.",
            description: "At Digital Creative Agency, I was responsible for creating engaging and responsive websites for clients across various industries. I worked closely with designers and backend developers to bring creative concepts to life. My role involved developing custom WordPress themes, building React applications, and ensuring cross-browser compatibility and mobile responsiveness."
          },
          2: {
            company: "StartupTech Indonesia",
            position: "Junior Frontend Developer",
            period: "Jun 2019 - Feb 2020", 
            shortDesc: "Started my professional journey developing user interfaces for startup products and learning modern web development practices.",
            description: "My first professional role where I learned the fundamentals of modern web development. I contributed to building the company's main product interface, participated in code reviews, and gained experience with agile development methodologies. This role provided me with a solid foundation in React.js, version control, and collaborative development practices."
          }
        }
      },
    },
  },
  id: {
    translation: {
      headline: "Memberdayakan Pengalaman Digital Melalui Pengembangan Frontend",
      description:
        "Saya adalah pengembang web front-end dengan rasa desain yang kuat, berdedikasi untuk mengubah konsep kreatif menjadi situs web yang responsif dan berkinerja tinggi. Dari antarmuka UI/UX interaktif hingga animasi yang halus dan kode yang skalabel, saya membantu merek dan kreator membangun pengalaman digital yang kuat yang benar-benar terhubung dengan pengguna.",
      codeStats: "Baris Kode & Terus Bertambah",
      industrySummary:
        "Bekerja sama dengan klien di bidang teknologi, game, dan industri kreatif untuk membangun situs web modern dan responsif. Menggabungkan presisi desain dengan kode yang bersih dan skalabel untuk menghadirkan solusi frontend yang luar biasa.",
      discover: "Selengkapnya",
      aboutUs: "Tentang Saya",
      desc_aboutUs: "Halo, saya Yosep Wahyu D atau sering dikenal Yosh Casaster, seorang Frontend Web Developer dengan gairah untuk menciptakan pengalaman web yang mulus, responsif, dan menarik secara visual. Fokus utama saya adalah membangun antarmuka yang berpusat pada pengguna menggunakan framework modern seperti React.js, didukung oleh tools utility-first seperti Tailwind CSS. Dengan pengalaman lebih dari 4 tahun dalam rekayasa frontend, saya mengkhususkan diri dalam membuat situs web yang cepat dimuat, dapat diakses, dan skalabel yang terlihat dan terasa hebat di semua perangkat. Saya bangga memadukan kode bersih dengan desain bermakna. Baik itu mengimplementasikan animasi GSAP yang halus atau mengintegrasikan interaksi 3D yang imersif menggunakan Three.js, saya mendekati setiap proyek dengan perhatian pada kinerja, responsivitas, dan kreativitas. Lebih dari sekadar 'bagaimana tampilannya,' saya sangat peduli dengan cara kerjanya—memastikan setiap komponen UI efisien, intuitif, dan dapat digunakan kembali. Saat ini, saya bekerja sama dengan tim kreatif, startup, dan pengembang game indie untuk mengubah ide kompleks menjadi antarmuka yang elegan dan fungsional. Saya selalu menjelajahi batas baru dalam animasi web, desain gerak, dan arsitektur frontend. Mari kita bangun sesuatu yang luar biasa bersama.",

      projects: {
        project1: {
          title: "SATARUZ RPG | RPG WEBSITE",
          desc: "Implementasi RPG berbasis teks dari BOT WhatsApp menjadi RPG berbasis Website dengan animasi yang unik",
        },
        project2: {
          title: "Portofolio Developer Pribadi – GSAP & UI 3D",
          desc: "Membuat situs portofolio animasi dengan scroll animation dari GSAP dan elemen 3D interaktif menggunakan Three.js. Menyertakan CMS kustom untuk pembaruan konten yang mudah. Meraih skor performa Lighthouse 98+. Dibangun dengan fokus pada SEO, desain responsif, dan aksesibilitas.",
        },
      },
    },
  },
  fr: {
    translation: {
      headline:
        "Favoriser des expériences numériques grâce au développement frontend",
      description:
        "Je suis développeur web frontend avec un sens aigu du design, dédié à la transformation de concepts créatifs en sites web réactifs et performants. Des interfaces UI/UX interactives aux animations fluides et au code évolutif, j'aide les marques et les créateurs à construire des expériences numériques puissantes et engageantes.",
      codeStats: "Lignes de code & en augmentation",
      industrySummary:
        "Collaboration avec des clients dans les domaines de la technologie, du jeu vidéo et de la création pour développer des sites web modernes et réactifs. Alliant précision du design et code propre pour offrir des solutions frontend exceptionnelles.",
      discover: "Découvrir plus",
      aboutUs: "A propos de nous",
      desc_aboutUs: "Bonjour, je suis Yosh Casaster, développeur web frontend passionné par la création d’expériences web fluides, réactives et visuellement attrayantes. Mon principal objectif est de concevoir des interfaces centrées utilisateur avec des frameworks modernes comme React.js, renforcés par des outils utility-first tels que Tailwind CSS. Fort de plus de 4 ans d’expérience en ingénierie frontend, je me spécialise dans la création de sites web rapides, accessibles et évolutifs, performants sur tous les appareils. Je suis fier de combiner un code propre avec un design significatif. Qu’il s’agisse de mettre en œuvre des animations GSAP fluides ou d’intégrer des interactions 3D immersives avec Three.js, j’aborde chaque projet avec une attention particulière à la performance, la réactivité et la créativité. Au-delà de 'l’apparence,' je m’assure que tout fonctionne parfaitement — chaque composant UI est efficace, intuitif et réutilisable. Actuellement, je collabore avec des équipes créatives, des startups et des développeurs de jeux indépendants pour transformer des idées complexes en interfaces élégantes et fonctionnelles. J’explore sans cesse de nouveaux horizons dans l’animation web, le design du mouvement et l’architecture frontend. Construisons ensemble quelque chose d’exceptionnel.",

      projects: {
        project1: {
          title: "Darkblade Studio – Développement de plateforme Web",
          desc: "Développement d'une plateforme web entièrement responsive et évolutive pour un studio de jeux fantastiques. Utilisation de React.js avec Tailwind CSS pour une construction rapide de l’interface, intégration d’API backend pour les statistiques de joueurs, connexions et classements en direct. Optimisé pour la performance et l’accessibilité.",
        },
        project2: {
          title: "Portfolio Développeur Personnel – GSAP & UI 3D",
          desc: "Création d’un site de portfolio animé avec des scroll animations GSAP et des éléments 3D interactifs via Three.js. CMS personnalisé pour une mise à jour facile du contenu. Score Lighthouse de 98+. Construit avec un focus sur le SEO, la réactivité, et l’accessibilité.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
