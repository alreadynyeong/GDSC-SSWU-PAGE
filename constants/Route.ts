export interface RouteType {
    title: string;
    route: string;
    color: string;
}

export const Routes: { [key: string]: RouteType } = {
    HOME: {
      title: 'HOME',
      route: '/',
      color: '#EA4335'
    },
    INFO: {
      title: 'ABOUT US',
      route: '/about',
      color: '#4285F4',
    },
    CONTACT: {
      title: 'CONTACT US',
      route: 'https://gdsc.community.dev/sungshin-womens-university/',
      color: '#0F9D58',
    },
    PROJECT: {
      title: 'TEAM PROJECTS',
      route: '/projects',
      color: '#FBBC04',
    },
  };
  
  export const NavBarMenus = [Routes.HOME, Routes.INFO, Routes.CONTACT, Routes.PROJECT];