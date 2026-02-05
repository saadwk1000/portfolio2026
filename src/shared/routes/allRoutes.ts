import Admin from "../../pages/admin/page";
import Login from "../../pages/login/page";
import ContactInfo from "../../pages/mainPage/contactInfo/page";
import HomePage from "../../pages/mainPage/homePage/page";
import Projects from "../../pages/mainPage/projects/page";
import ProjectDetails from "../../pages/mainPage/projects/projectDetail/page";
import Resume from "../../pages/mainPage/resume/page";
import RouteConstant from "./routeConstant";

export interface RouteType {
  path: string;
  title: string;
  Component: React.ComponentType;
}

export const publicRoute: RouteType[] = [
  {
    path: RouteConstant.login.path,
    title: RouteConstant.login.title,
    Component: Login,
  },
  {
    path: RouteConstant.homePage.path,
    title: RouteConstant.homePage.title,
    Component: HomePage,
  },
  {
    path: RouteConstant.resume.path,
    title: RouteConstant.resume.title,
    Component: Resume,
  },
  {
    path: RouteConstant.projects.path,
    title: RouteConstant.projects.title,
    Component: Projects,
  },
  {
    path: RouteConstant.projectDetails.path,
    title: RouteConstant.projectDetails.title,
    Component: ProjectDetails,
  },
  {
    path: RouteConstant.contactInfo.path,
    title: RouteConstant.contactInfo.title,
    Component: ContactInfo,
  },
];

export const privateRoute: RouteType[] = [
  {
    path: RouteConstant.admin.path,
    title: RouteConstant.admin.title,
    Component: Admin,
  },
];
