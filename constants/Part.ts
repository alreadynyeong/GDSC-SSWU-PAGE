export interface PartType {
    title: string;
    content: string;
    svg: number;
}

export const Parts: { [key: string]: PartType } = {
    DESIGN: {
      title: 'UI/UX Design',
      content: "프로젝트의 서비스를 디자인하고, 사용자에게 더 나은 경험을 제공하기 위해 끊임없이 노력합니다. ",
      svg: 1
    },
    FRONT: {
        title: "Frontend",
        content: "앱/웹에서 사용자 인터페이스를 구현합니다.",
        svg: 2
    },
    BACK: {
        title: "Backend",
        content: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
        svg: 3
    }
  };
  export const HomeParts= [Parts.DESIGN, Parts.FRONT, Parts.BACK];
  