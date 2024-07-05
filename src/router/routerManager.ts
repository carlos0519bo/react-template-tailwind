import { routes, RouteName } from './routes';
import { useNavigate } from 'react-router-dom';

const getRouteByName = (name: RouteName): string | undefined => {
  const allRoutes = [...routes.public, ...routes.private];
  const route = allRoutes.find(r => r.name === name);
  return route?.path;
};

export const useRouterManager = () => {
  const navigate = useNavigate();

  const to = (name: RouteName) => {
    const path = getRouteByName(name);
    if (path) {
      navigate(path);
    } else {
      console.error(`No route found with name: ${name}`);
    }
  };

  const back = () => {
    navigate(-1);
  };

  return { to, back };
};

export const RouterManager = {
  getRouteByName,
};