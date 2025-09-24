import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectPage from "../pages/ProjectPage";
import EducationPage from "../pages/EducationPage";
import CertificatePage from "../pages/CertificatePage";

const routes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: AboutPage,
      },
      {
        key: "skills",
        name: "skills",
        path: "/skills",
        Component: SkillsPage,
      },
      {
        key: "projects",
        name: "projects",
        path: "/projects",
        Component: ProjectPage,
      },
      {
        key: "education",
        name: "education",
        path: "/education",
        Component: EducationPage,
      },
      {
        key: "certificates",
        name: "certificates",
        path: "/certificates",
        Component: CertificatePage,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: NotFoundPage,
    key: "404",
  },
];

export default routes;