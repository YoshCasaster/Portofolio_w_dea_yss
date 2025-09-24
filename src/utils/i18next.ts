// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headline: "Empowering Digital Experiences Through Frontend Development",
      description:
        "I’m a front-end web developer with a strong design sensibility, dedicated to transforming creative concepts into responsive, high-performance websites. From interactive UI/UX interfaces to smooth animations and scalable code, I help brands and creators build powerful digital experiences that truly connect with users.",
      codeStats: "Lines of Code & Counting",
      industrySummary:
        "Collaborated with clients across tech, gaming, and creative industries to build modern, responsive websites. Merging design precision with clean, scalable code to deliver exceptional frontend solutions.",
      discover: "Discover More",
      aboutUs: "About Us",
      desc_aboutUs: "Hi, I’m YoshCasaster, a Frontend Web Developer with a passion for crafting seamless, responsive, and visually compelling web experiences. My primary focus lies in building user-centered interfaces using modern frameworks like React.js, enhanced by utility-first tools such as Tailwind CSS. With over 4 years of experience in frontend engineering, I specialize in creating fast-loading, accessible, and scalable websites that look and feel great across all devices. I take pride in blending clean code with meaningful design. Whether it’s implementing smooth GSAP animations or integrating immersive 3D interactions using Three.js, I approach every project with attention to performance, responsiveness, and creative flair. Beyond just 'how it looks', I care deeply about how it works—making sure every UI component is efficient, intuitive, and reusable. Currently, I collaborate with creative teams, startups, and indie game developers to turn complex ideas into elegant, functional interfaces. I'm always exploring new frontiers in web animation, motion design, and frontend architecture. Let’s build something awesome together.",

      projects: {
        project1: {
          title: "Darkblade Studio – Web Platform Development",
          desc: "Developed a fully responsive and scalable web platform for a fantasy game studio. Implemented React.js with Tailwind CSS for rapid UI building, and integrated backend APIs for player stats, login, and live leaderboards. Optimized for performance and accessibility across all devices.",
        },
        project2: {
          title: "Personal Developer Portfolio – GSAP & 3D UI",
          desc: "Created an animated portfolio site with GSAP scroll animations and interactive 3D sections using Three.js. Included custom-built CMS for easy content updates. Achieved Lighthouse performance score of 98+. Built with SEO, responsive design, and accessibility in mind.",
        },
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
      aboutUs: "Tentang Kami",
      desc_aboutUs: "Halo, saya Yosh Casaster, seorang Frontend Web Developer dengan gairah untuk menciptakan pengalaman web yang mulus, responsif, dan menarik secara visual. Fokus utama saya adalah membangun antarmuka yang berpusat pada pengguna menggunakan framework modern seperti React.js, didukung oleh tools utility-first seperti Tailwind CSS. Dengan pengalaman lebih dari 4 tahun dalam rekayasa frontend, saya mengkhususkan diri dalam membuat situs web yang cepat dimuat, dapat diakses, dan skalabel yang terlihat dan terasa hebat di semua perangkat. Saya bangga memadukan kode bersih dengan desain bermakna. Baik itu mengimplementasikan animasi GSAP yang halus atau mengintegrasikan interaksi 3D yang imersif menggunakan Three.js, saya mendekati setiap proyek dengan perhatian pada kinerja, responsivitas, dan kreativitas. Lebih dari sekadar 'bagaimana tampilannya,' saya sangat peduli dengan cara kerjanya—memastikan setiap komponen UI efisien, intuitif, dan dapat digunakan kembali. Saat ini, saya bekerja sama dengan tim kreatif, startup, dan pengembang game indie untuk mengubah ide kompleks menjadi antarmuka yang elegan dan fungsional. Saya selalu menjelajahi batas baru dalam animasi web, desain gerak, dan arsitektur frontend. Mari kita bangun sesuatu yang luar biasa bersama.",

      projects: {
        project1: {
          title: "Darkblade Studio – Pengembangan Platform Web",
          desc: "Mengembangkan platform web yang responsif dan skalabel untuk studio game fantasi. Menggunakan React.js dan Tailwind CSS untuk membangun UI secara cepat, serta mengintegrasikan API backend untuk statistik pemain, login, dan papan peringkat langsung. Dioptimalkan untuk kinerja dan aksesibilitas di semua perangkat.",
        },
        project2: {
          title: "Portofolio Developer Pribadi – GSAP & UI 3D",
          desc: "Membuat situs portofolio animasi dengan scroll animation dari GSAP dan elemen 3D interaktif menggunakan Three.js. Menyertakan CMS kustom untuk pembaruan konten yang mudah. Meraih skor performa Lighthouse 98+. Dibangun dengan fokus pada SEO, desain responsif, dan aksesibilitas.",
        },
      },

      projects: {
        title: "Proyek Saya",
        description: "Kumpulan proyek pengembangan web yang menampilkan keahlian saya dalam teknologi frontend, desain responsif, dan pengalaman pengguna. Setiap proyek mewakili tantangan dan kesempatan belajar yang unik.",
        viewMore: "Lihat Lebih Banyak di GitHub"
      },

      education: {
        title: "Latar Belakang Pendidikan",
        description: "Perjalanan akademis dan jalur pembelajaran berkelanjutan saya dalam ilmu komputer dan pengembangan web, dari pendidikan formal hingga sertifikasi profesional.",
        achievements: "Pencapaian Utama",
        items: {
          0: {
            degree: "Sarjana Ilmu Komputer",
            institution: "Universitas Indonesia",
            period: "2018 - 2022",
            description: "Fokus pada Rekayasa Perangkat Lunak dan Pengembangan Web dengan spesialisasi dalam Teknologi Frontend.",
            achievements: {
              0: "Lulus Magna Cum Laude dengan IPK 3.8/4.0",
              1: "Penghargaan Tugas Akhir Terbaik untuk Platform Portfolio React.js",
              2: "Anggota aktif Himpunan Mahasiswa Ilmu Komputer"
            }
          },
          1: {
            degree: "Bootcamp Pengembangan Frontend",
            institution: "Dicoding Indonesia",
            period: "2021",
            description: "Program intensif 6 bulan yang mencakup teknologi frontend modern termasuk React, Vue, dan Angular.",
            achievements: {
              0: "Lulusan 5% teratas dengan nilai sempurna",
              1: "Membangun 10+ aplikasi web siap produksi",
              2: "Membimbing 20+ developer junior"
            }
          },
          2: {
            degree: "SMA - Jurusan IPA",
            institution: "SMA Negeri 1 Jakarta",
            period: "2015 - 2018",
            description: "Fokus pada Matematika dan Ilmu Komputer dengan paparan awal pemrograman.",
            achievements: {
              0: "Lulusan terbaik dengan nilai 9.8/10.0",
              1: "Juara 1 Olimpiade Pemrograman Nasional",
              2: "Ketua OSIS"
            }
          }
        }
      },

      certificates: {
        title: "Sertifikat & Pencapaian",
        description: "Sertifikasi profesional dan pencapaian yang memvalidasi keahlian saya dalam pengembangan web, cloud computing, dan desain pengalaman pengguna.",
        viewCredential: "Lihat Kredensial",
        items: {
          0: {
            title: "Sertifikat Profesional React Developer",
            issuer: "Meta (Facebook)",
            date: "Desember 2023"
          },
          1: {
            title: "Ahli Pengembang Web Frontend",
            issuer: "Dicoding Indonesia",
            date: "November 2023"
          },
          2: {
            title: "Algoritma JavaScript dan Struktur Data",
            issuer: "freeCodeCamp",
            date: "Oktober 2023"
          },
          3: {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "September 2023"
          },
          4: {
            title: "Sertifikat Profesional Google UX Design",
            issuer: "Google",
            date: "Agustus 2023"
          },
          5: {
            title: "Penguasaan Tailwind CSS",
            issuer: "Tailwind Labs",
            date: "Juli 2023"
          }
        }
      },

      workHistory: {
        title: "Riwayat Pekerjaan",
        description: "Perjalanan profesional dan pengalaman saya bekerja dengan berbagai perusahaan, dari startup hingga agensi mapan, membangun aplikasi web modern dan memimpin tim pengembangan.",
        items: {
          0: {
            company: "Tech Innovate Solutions",
            position: "Senior Frontend Developer",
            period: "Jan 2022 - Sekarang",
            shortDesc: "Memimpin pengembangan frontend untuk aplikasi web enterprise menggunakan React.js dan teknologi web modern.",
            description: "Sebagai Senior Frontend Developer di Tech Innovate Solutions, saya memimpin pengembangan aplikasi web kompleks untuk klien enterprise. Tanggung jawab saya meliputi merancang solusi frontend yang skalabel, membimbing developer junior, dan berkolaborasi dengan tim lintas fungsi untuk menghasilkan produk berkualitas tinggi. Saya telah berhasil menyelesaikan 15+ proyek, meningkatkan performa aplikasi sebesar 40%, dan menetapkan standar coding yang meningkatkan produktivitas tim."
          },
          1: {
            company: "Digital Creative Agency",
            position: "Frontend Developer",
            period: "Mar 2020 - Des 2021",
            shortDesc: "Mengembangkan website responsif dan aplikasi web untuk berbagai klien di industri kreatif dan e-commerce.",
            description: "Di Digital Creative Agency, saya bertanggung jawab membuat website yang menarik dan responsif untuk klien di berbagai industri. Saya bekerja sama dengan desainer dan backend developer untuk mewujudkan konsep kreatif. Peran saya meliputi pengembangan tema WordPress kustom, membangun aplikasi React, dan memastikan kompatibilitas lintas browser serta responsivitas mobile."
          },
          2: {
            company: "StartupTech Indonesia", 
            position: "Junior Frontend Developer",
            period: "Jun 2019 - Feb 2020",
            shortDesc: "Memulai perjalanan profesional dengan mengembangkan antarmuka pengguna untuk produk startup dan mempelajari praktik pengembangan web modern.",
            description: "Peran profesional pertama saya di mana saya mempelajari dasar-dasar pengembangan web modern. Saya berkontribusi dalam membangun antarmuka produk utama perusahaan, berpartisipasi dalam code review, dan mendapatkan pengalaman dengan metodologi pengembangan agile. Peran ini memberikan saya fondasi yang solid dalam React.js, version control, dan praktik pengembangan kolaboratif."
          }
        }
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

      projects: {
        title: "Mes Projets",
        description: "Une collection de projets de développement web présentant mes compétences en technologies frontend, design responsive et expérience utilisateur. Chaque projet représente un défi unique et une opportunité d'apprentissage.",
        viewMore: "Voir Plus sur GitHub"
      },

      education: {
        title: "Parcours Éducatif",
        description: "Mon parcours académique et d'apprentissage continu en informatique et développement web, de l'éducation formelle aux certifications professionnelles.",
        achievements: "Réalisations Clés",
        items: {
          0: {
            degree: "Licence en Informatique",
            institution: "Universitas Indonesia",
            period: "2018 - 2022",
            description: "Spécialisé en Génie Logiciel et Développement Web avec une spécialisation dans les Technologies Frontend.",
            achievements: {
              0: "Diplômé Magna Cum Laude avec une moyenne de 3.8/4.0",
              1: "Prix du Meilleur Projet Final pour la Plateforme Portfolio React.js",
              2: "Membre actif de l'Association des Étudiants en Informatique"
            }
          },
          1: {
            degree: "Bootcamp Développement Frontend",
            institution: "Dicoding Indonesia",
            period: "2021",
            description: "Programme intensif de 6 mois couvrant les technologies frontend modernes incluant React, Vue et Angular.",
            achievements: {
              0: "Diplômé dans le top 5% avec un score parfait",
              1: "Construit 10+ applications web prêtes pour la production",
              2: "Mentoré 20+ développeurs juniors"
            }
          },
          2: {
            degree: "Lycée - Filière Scientifique",
            institution: "SMA Negeri 1 Jakarta",
            period: "2015 - 2018",
            description: "Spécialisé en Mathématiques et Informatique avec une exposition précoce à la programmation.",
            achievements: {
              0: "Major de promotion avec une moyenne de 9.8/10.0",
              1: "1ère Place Olympiade Nationale de Programmation",
              2: "Président du Conseil des Étudiants"
            }
          }
        }
      },

      certificates: {
        title: "Certificats & Réalisations",
        description: "Certifications professionnelles et réalisations qui valident mon expertise en développement web, cloud computing et design d'expérience utilisateur.",
        viewCredential: "Voir les Références",
        items: {
          0: {
            title: "Certificat Professionnel Développeur React",
            issuer: "Meta (Facebook)",
            date: "Décembre 2023"
          },
          1: {
            title: "Expert Développeur Web Frontend",
            issuer: "Dicoding Indonesia",
            date: "Novembre 2023"
          },
          2: {
            title: "Algorithmes JavaScript et Structures de Données",
            issuer: "freeCodeCamp",
            date: "Octobre 2023"
          },
          3: {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "Septembre 2023"
          },
          4: {
            title: "Certificat Professionnel Google UX Design",
            issuer: "Google",
            date: "Août 2023"
          },
          5: {
            title: "Maîtrise Tailwind CSS",
            issuer: "Tailwind Labs",
            date: "Juillet 2023"
          }
        }
      },

      workHistory: {
        title: "Historique Professionnel",
        description: "Mon parcours professionnel et mon expérience de travail avec diverses entreprises, des startups aux agences établies, en construisant des applications web modernes et en dirigeant des équipes de développement.",
        items: {
          0: {
            company: "Tech Innovate Solutions",
            position: "Développeur Frontend Senior",
            period: "Jan 2022 - Présent",
            shortDesc: "Direction du développement frontend pour des applications web d'entreprise utilisant React.js et les technologies web modernes.",
            description: "En tant que Développeur Frontend Senior chez Tech Innovate Solutions, je dirige le développement d'applications web complexes pour des clients d'entreprise. Mes responsabilités incluent l'architecture de solutions frontend évolutives, le mentorat de développeurs juniors, et la collaboration avec des équipes transversales pour livrer des produits de haute qualité. J'ai livré avec succès 15+ projets, amélioré les performances d'application de 40%, et établi des standards de codage qui ont augmenté la productivité de l'équipe."
          },
          1: {
            company: "Digital Creative Agency",
            position: "Développeur Frontend",
            period: "Mar 2020 - Déc 2021",
            shortDesc: "Développement de sites web responsifs et d'applications web pour divers clients dans les industries créatives et e-commerce.",
            description: "Chez Digital Creative Agency, j'étais responsable de créer des sites web engageants et responsifs pour des clients de diverses industries. J'ai travaillé étroitement avec les designers et développeurs backend pour donner vie aux concepts créatifs. Mon rôle impliquait le développement de thèmes WordPress personnalisés, la construction d'applications React, et l'assurance de la compatibilité cross-browser et de la responsivité mobile."
          },
          2: {
            company: "StartupTech Indonesia",
            position: "Développeur Frontend Junior",
            period: "Jun 2019 - Fév 2020",
            shortDesc: "Début de mon parcours professionnel en développant des interfaces utilisateur pour des produits de startup et en apprenant les pratiques modernes de développement web.",
            description: "Mon premier rôle professionnel où j'ai appris les fondamentaux du développement web moderne. J'ai contribué à la construction de l'interface du produit principal de l'entreprise, participé aux revues de code, et acquis de l'expérience avec les méthodologies de développement agile. Ce rôle m'a fourni une base solide en React.js, contrôle de version, et pratiques de développement collaboratif."
          }
        }
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
