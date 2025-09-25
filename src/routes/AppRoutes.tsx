import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SkillsPage from "../pages/SkillsPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import EducationPage from "../pages/EducationPage";
import CertificatePage from "../pages/CertificatePage";
import WorkHistoryPage from "../pages/WorkHistoryPage";
import WorkHistoryDetailPage from "../pages/WorkHistoryDetailPage";

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
        key: "project-detail",
        name: "project-detail",
        path: "/projects/:id",
        Component: ProjectDetailPage,
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
        key: "work-history",
        name: "work-history", 
        path: "/work-history",
        Component: WorkHistoryPage,
      },
      {
        key: "work-history-detail",
        name: "work-history-detail",
        path: "/work-history/:id", 
        Component: WorkHistoryDetailPage,
      },
      {
  },
  {
    name: "404",
    path: "*",
    Component: NotFoundPage,
    key: "404",
  },
];

export default routes;