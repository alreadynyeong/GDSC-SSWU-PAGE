export interface InfoType {
    title: string;
    url: string;
}

export const Info: { [key: string]: InfoType } = {
    HOME: {
      title: 'GDSC 링크',
      url: "https://gdsc.community.dev/sungshin-womens-university/",
    },
    INSTA: {
      title: 'GDSC 인스타',
      url: 'https://www.instagram.com/gdsc.sswu/',
    },
    FACE_BOOK: {
      title: 'GDSC 페이스북',
      url: 'https://www.facebook.com/gdsckorea/',
    },
  };
  
  export const Infos = [Info.HOME, Info.INSTA, Info.FACE_BOOK];