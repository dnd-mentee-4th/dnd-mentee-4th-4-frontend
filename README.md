## 프로젝트명 : 이것좀 사줘

### Design
* 김민주
* 김영환

### Front-End
* 이진수
* 박해솔

### Back-End
* 김세윤
* 황진성

<hr/>

### 코딩 컨벤션

Front-End, Back-End 모두 JS 사용으로 컨벤션 통일

#### 사용 Tool
[ESLint](https://eslint.org/) : JavaScript 코드에서 발견 된 문제을 식별하는 정적 코드 분석 도구인 <br/>
[Prettier](https://prettier.io/): 코드 포멧터 (작성한 코드를 정해진 코딩 스타일로 변환해주는 도구)

ESLint extend [airbnb, prettier] 사용 (추후 개발자간의 합의 후 불필요한 Rule 제거)<br/>
[Prettier 세부 설정](https://github.com/dnd-mentee-4th/dnd-mentee-4th-4-frontend/blob/master/.prettierrc)

### Branch 관리
- 개발자가 개별적으로 fork한 후 개발 진행

###  Branch 명
- master : 제품으로 출시될 수 있는 브랜치
- develop : 다음 출시 버전을 개발하는 브랜치
- feature : 기능을 개발하는 브랜치
- release : 이번 출시 버전을 준비하는 브랜치
- hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

### Commit Message 규칙
- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 관련
- style : 스타일 변경 (포매팅 수정, 들여쓰기 추가, …)
- build : 빌드 관련 파일 수정
- chore : 그 외 수정
- ※ [참고](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#examples)
