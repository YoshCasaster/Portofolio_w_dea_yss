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
          title: "LOVB APP",
          desc: "Aplikasi Berbasis Web, LOVB adalah aplikasi catatan pengeluaran untuk megantisipasi overbudget harian, dengan adanya rekap bulanan serta tahunan",
        },
        project3: {
          title: "GMAIL MARKETING",
          desc: `Software Pengiriman Gmail secara masal.
          - Menyimpan Akun Gmail
          - Mendapatkan Log Pengiriman
          - Tanpa Batas Limit Pengiriman`,
        },
        project4: {
          title: "WEB PERSONAL BRANDING",
          desc: `Website Toko Pribadi.`,
        }
      },
      education: {
        title: "Latar Belakang Pendidikan",
        description: "Perjalanan akademis dan jalur pembelajaran berkelanjutan saya dalam ilmu komputer dan pengembangan web, dari pendidikan formal hingga sertifikasi profesional.",
        achievements: "Pencapaian Utama",
        items: {
          0: {
            degree: "Sarjana Teknik Informatika",
            institution: "Universitas Semarang",
            period: "2025",
            description: "Fokus pada Rekayasa Perangkat Lunak dan Pengembangan Web dengan spesialisasi dalam Teknologi Frontend.",
            achievements: {
              0: "Membangun BOT WhatsApp Untuk UMKM KKN",
              1: "10 Penulis Terbaik SINATTI",
            }
          },
          1: {
            degree: "Farmasi Industri",
            institution: "SMK Theresiana",
            period: "2020",
            description: "Fokus pada industri farmasi dan pembuatan obat dengan skala besar",
            achievements: {

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
            title: "SINATTI 2025",
            issuer: "Transformasi Digital Berkelanjutan",
            date: "Juli 2025"
          },
          1: {
            title: "JMC TALK",
            issuer: "FRAMEWORK 101",
            date: "Desember 2020",
          },
          2: {
            title: "Coding Yourself",
            issuer: "Memprogram Keunikan Diri Sendiri",
            date: "November 2020",
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
            company: "PT Vista Jaya Raya",
            position: "Desk Collection",
            period: "Jan 2024 - Okt 2024",
            shortDesc: "Negosiasi dan Rekap Data Nasabah",
            description: "Melakukan negosiasi untuk mencapai tujuan bersama dan melakukan rekap data secara berkala pada setiap bulan"
          },
          1: {
            company: "PT Global Multi Pharmalab",
            position: "Quality Control",
            period: "Mar 2020",
            shortDesc: "Menjaga Kualitas Produksi Obat",
            description: "pengujian bahan baku, bahan pengemas, produk antara, dan produk jadi untuk memastikan kemurnian, keamanan, dan kemanjuran obat sesuai standar dan Cara Pembuatan Obat yang Baik"
          }
        }
      },
    },
  }
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
