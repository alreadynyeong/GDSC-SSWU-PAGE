export interface TeamProps {
    team: string,
    member: string[],
    name: string,
    content: string
}

export const TEAMS: TeamProps[] = [
    {
        team: 'A',
        member: ['이민형, ', '공정민, ', '김유진, ',  '송여경'],
        name: "withParents",
        content: `
        withParents는 사용자 친화적인 인터페이스와 직관적인 기능을 제공하여 부모와 자식 간의 의사소통을 간편하게 할 수 있도록 합니다. 부모는 어플을 통해 자신의 일정,투약일정,위치,일상 등을 자식들과 공유하고, 자식은 부모의 상태를 쉽게 확인하며, 부모의 요청에 대한 대처를 할 수 있습니다. 이러한 기능을 통해, 이 어플은 부모와 자식 간의 의사소통 문제를 해결하고, 가족 구성원들 간의 건강하고 안정적인 관계를 유지하는 데 도움이 됩니다.

프론트는 안드로이드와 IOS사용자 모두에게 앱을 제공해야 한다는 필요에 맞추어 동시에 개발이 가능한 리액트 네이티브를 사용하였고, 자바스크립트 언어를 사용해 개발하였습니다.
백엔드는 restful api서버를 구현하기위해 스프링 부트를 사용하였고, 데이터베이스는 MYSQL을 사용했습니다. 언어는 자바를 사용해 개발하였습니다.

withParents는 자식과 부모가 위치정보를 제공할 뿐 아니라, 각 가족 구성원들의 건강 상태나 일정 등을 쉽게 공유하고 확인할 수 있도록 하여 가족들 간의 소통과 연결성을 강화하고 가족 구성원들이 서로를 돌봄으로써 행복한 삶을 살 수 있도록 도와줄수 있습니다.

        `
    },
    {
        team: 'B',
        member: ['유소희, ', '김채리, ', '신연정, ', '이현진'],
        name: "사인즈 (Signz)",
        content: `
        안녕하세요, 저희는 GDSC 프로젝트로 '사인즈'라는 어플을 개발한 Team B입니다. 사인즈는 노동자들에게 양질의 일자리를 제공하고, 사업주들은 효율적인 근무관리 및 더 나은 구인을 가능하게 함으로써 모두가 만족할 수 있는 노동시장을 생성하는 것을 목표로 합니다.
        `
    },
    {
        team: 'C',
        member: ['김세린, ', '정승원, ', '김민채, ', '조해지'],
        name: "LETS",
        content: `
        ### LETS은 무슨 서비스인가요?

**👉LETS는 임산부, 노약자, 어린이와 같은 사회적 약자를 포함한 현대인들을 위한 운동 시설 예약 플랫폼이에요.**

**👉”함께” 의 의미를 가지고 있는 LETS가 서비스 이름이며, “함께 운동하자”는 의미를 담고 있어요!**

**👉 공동 구매 개념을 활용해 저렴한 가격으로 다양한 운동을 체험할 수 있는 운동 시설 예약 플랫폼이에요!**

### LET를 제안하는 목적은 무엇인가요?

**👉** 임산부, 주부, 고령자, 아이들 등 운동시설을 이용하는데 어려움이 있는 사람들에게 시간, 비용, 장소 측면에서 **부담 없는 운동 시설** 제공을 위해서에요. 🙂

**👉** 운동 시설을 종목별로 한번에 모아서 가격, 위치를 쉽게비교해줌으로써 사용자들의 **운동 입문 장벽을 낮추기** 위해서에요**.**🙂

**👉** 다양한 종류의 운동을 경험해본 후 사용자들의 적성과 흥미와 관련된 운동을 찾고 이를 함으로써 **사용자들의 건강 생활 증진**을 위해서에요.🙂

**👉**운동 시설 관리자 입장에서 **구독 이용자들이 없는 특정 시간에 수입을 창출** 할 방법을 마련하기 위함.🙂

### ETC

더 자세한 기능 및 시뮬레이션을 원한다면 아래 링크를 클릭해주세요 ! 🙂 https://www.youtube.com/watch?v=eLGwpUoEnSg
        `
    },
    {
        team: 'D',
        member: ['유정선, ', '신민선, ', '육서현, ', '김채은'],
        name: "Free&Pre",
        content: `
        여성 시각 장애인의 월경권을 지켜주자는 목표를 가지고 프로젝트를 진행하였습니다. 여성 시각장애인은 비시각장애인 여성에 비해 월경에 큰 어려움을 겪고 있습니다. 이러한 여성 시각장애인의 불편함을 해소하기 위해 저희는 생리대 구매 보조, 월경 관리, 월경 관련 정보를 제공합니다. 
        `
    },
    {
        team: 'E',
        member: ['김채영, ', '윤주영, ', '최우영, ', '홍혜민'],
        name: "Under the Sea",
        content: `
        🌊 배경

최근 전체 해양 쓰레기의 85% 이상을 플라스틱이 차지하고 미세 플라스틱만 230만톤에 달할 정도로 플라스틱 절감의 필요성이 커지고 있습니다. 특히 해양 쓰레기는 해양 생물의 삶을 크게 위협하고 있습니다. 그들의 고통에 공감하고 해양 보존을 생각하는 사람이 늘어났지만, 여전히 적극적인 실천이 중요한 상황입니다. 

환경 활동을 대단한 일로 생각해 혼자 실천하는 것이 어렵고 어떤 실천을 하면 좋을지 결정하기 쉽지 않아 생각에만 그치는 경우가 많습니다. 따라서 저희는 “Under the Sea”  앱을 통해 사용자들이 가까운 지인과 함께 간단한 환경 실천을 일상에서 자주 실천하도록 돕고자 했습니다. 

🐳 기능

1. 친구, 가족들과 약속 잡을 때 함께할 수 있는 환경 계획 세우기

제로 웨이스트 식당 방문, 플로깅 등 평소에 친구들과 쉽게 실천할 수 있는 여러 환경 보존 활동 정보를 참고해 계획을 세울 수 있는 기능을 제공합니다. 

계획은 제목, 날짜, 함께 할 친구의 아이디, 간단한 내용 등을 기록할 수 있습니다. 계획을 세울 때 참고할 환경 실천 관련 추천 정보도 동일 페이지에서 제공됩니다. 주제는 크게 음식, (플로깅) 장소, 환경 이벤트 홍보 등으로 나뉘어 있고 제목, 소개 글, 위치, 사이트 주소 등의 구체적인 정보를 확인할 수 있습니다. 

1. 해양 생물 캐릭터 제공

서비스의 지속적이고 안정적인 사용을 위해 제공되는 재미 요소입니다. 사용자는 고래, 거북이, 물범, 펭귄, 총 4종류의 해양 생물 캐릭터 중 한 가지를 선택하고 이름을 붙일 수 있습니다. 

사용자가 계획을 실천했을 때, 마일리지가 부여되고 마일리지를 특정 기준 이상 모으면 캐릭터가 성장하는 스토리 라인을 추가로 구현할 계획입니다. 

1. 환경 기록 남기기

실천한 계획에 대한 후기, 환경에 대한 다양한 의견, 반성 등을 포함한 나만의 기록을 남기고 습관을 드릴 수 있는 기능입니다. 기록 작성에 대한 부담감을 없애기 위해 날짜, 이미지, 짧은 내용만 포함합니다. 동일 페이지에서 해당 날짜의 계획 목록이 제공되어 쉽게 확인할 수 있습니다.
        `
    },
    {
        team: 'G',
        member: ['박지현, ', '김나은, ', '이가영, ', '최애림'],
        name: "OldEdu(올듀)",
        content: `
        (대표 설명)
        “OldEdu(올듀)”는 “Quality Education”를 주제로 하여 노인과 같은 디지털 약자를 위한 간단한 스마트폰 어플리케이션 교육 내용을 제공해주는 서비스입니다.
        
        (개요)
        스마트폰이 익숙한 젊은 세대에게는 새로운 스마트폰 지식을 습득한다는 것이 어려운 일이 아니기에 우리는 이제껏 “애플리케이션의 사용법을 배운다”라는 생각을 하지 못했습니다. 하지만 대표적으로 기성세대를 포함한 노인, 장년층 여전히 스마트폰으로 전화, 메신저, 영상 감상 등의 기초적인 기능만 사용하며, 새로운 어플 서비스에 쉽게 적응하지 못하는 취약계층의 존재합니다.
        우리에게는 아주 쉽고 단순한 작업들이 노인 계층에게는 어렵게 느껴질 수 있습니다. 따라 저희 팀 ‘OldEdu(올듀)’는 스마트폰 시장의 다양한 어플 사용법을 학습 컨텐츠로 제공할 수 있는 방법에 대해 고안하였습니다.
        
        (사용기술+기능 소개)
        ‘OldEdu(올듀)’서비스는 Android Studio, Kotilin, Firebase, Google Cloud Platform의 Google기술을 포함하여 NodeJS, Postman, Notion등을 사용하여 사용자가 학습자와 교육자로 분리되며 교육자는 학습자가 쉽게 이해할 수 있도록 사진과 음성 안내를 기반으로 한 스마트폰 어플 서비스 교육 컨텐츠를 제공합니다. 학습자는 교육자가 제공하는 사진을 이용한 교육 내용을 통해 교육을 받을 수 있습니다.
        ‘OldEdu(올듀)’는 현재 노인 계층 뿐만을 아니라 앞으로 계속 발전하는 IT사업에서 자연스럽게 뒤쳐지게 될 앞으로의 노인 세대을 위한 토대를 마련해야 한다는 생각을 가지고 이러한 프로젝트를 진행하게 되었습니다.
        
        `
    },
    {
        team: 'H',
        member: ['정진주, ', '신하령, ', '심지영, ', '김소희'],
        name: "Welling",
        content: `
        Welling은 일상에 지친 현대인들을 위한 힐링 도우미 어플리케이션 입니다.  도심에서 쉽게 접할 수 있는 휴식공간 소개, 정신건강에 관련된 의학적인 정보 제공, 하루의 감정 기록 등의 서비스를 제공합니다.  Android, Node.js, Kotlin 
        `
    }
]