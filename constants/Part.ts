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
        content: "사용자 인터페이스를 구현하는데 집중합니다. 웹 페이지나 모바일 애플리케이션 등의 디자인과 사용자 경험을 개발합니다.",
        svg: 2
    },
    BACK: {
        title: "Backend",
        content: "사용자의 요청에 대해 데이터를 처리하고 반환하고 보안과 확장성을 유지보수하기 위해 노력합니다.",
        svg: 3
    }
  };
  export const HomeParts= [Parts.DESIGN, Parts.FRONT, Parts.BACK];
  