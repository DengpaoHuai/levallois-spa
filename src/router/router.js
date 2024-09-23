import HomeScreen from '../pages/HomeScreen';
import NotFoundScreen from '../pages/NotFoundScreen';
import PlanetsScreen from '../pages/PlanetsScreen';

const routes = {
  '/': HomeScreen,
  '/planets': PlanetsScreen
};

const router = () => {
  const path = window.location.pathname;
  const page = routes[path];

  if (page) {
    document.getElementById('app').innerHTML = page();
  } else {
    document.getElementById('app').innerHTML = NotFoundScreen();
  }
};

export default router;

addEventListener('popstate', router);
