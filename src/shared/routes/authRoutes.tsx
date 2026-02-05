import RouteConstant from "./routeConstant";
import Login from "../../pages/login/page";

const AuthRoutes = () => [
  {
    path: RouteConstant.login,
    element: <Login />,
  },
];

export default AuthRoutes;
