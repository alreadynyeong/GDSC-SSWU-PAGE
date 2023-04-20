export interface RouteType {
    title: string;
    route: string;
}

export const Routes: { [key: string]: RouteType } = {
    HOME: {
      title: 'HOME',
      route: '/',
    },
    INFO: {
      title: 'ABOUT US',
      route: '/about',
    },
    PROJECT: {
      title: 'TEAM PROJECTS',
      route: '/projects',
    },
  };
  
  export const NavBarMenus = [Routes.HOME, Routes.INFO, Routes.PROJECT];