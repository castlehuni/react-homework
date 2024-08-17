# Vite + React 커스텀 템플릿 만들기

degit 명령을 사용해서 react 환경구성을 위한 Custom Vite Template을 스캐폴딩 할 수 있습니다.

```
degit castlehuni/vite-react-custom-template <프로젝트_이름>
```

<hr>

## 템플릿 구조

```
├── README.md
├── eslint.config.js
├── index.html
├── jsconfig.json
├── pnpm-lock.yaml
├── .npmrc
├── package.json
├── public
│   ├── icons
│   └── react.svg
├── src
│   ├── assets
│   ├── components
|   |   └── componentsTemplate.jsx
│   ├── main.jsx
│   ├── pages
|   |   └── pageTemplate.jsx
│   ├── styles
│   │   └── global.css
│   └── utils
|       └── utilTemplate.js
└── vite.config.js
```

## 진행 과정

1. `.gitignore`, `.npmrc`, `index.html` 그리고 public과 src 폴더 작성
2. `pnpm add -D vite`를 통해 Vite 설치와 package.json에 Vite CLI 작성 후 Vite 설치 확인
3. `pnpm add react react-dom`를 통해 리액트와 리액트 돔 설치
4. `pnpm add @types/react @types/react-dom @types/node -D`를 통해 React, Node 타입 선언 패키지, `pnpm add -D @vitejs/plugin-react`를 통해 Vite 플러그인 구성을 위한 패키지 설치
5. `pnpm create @eslint/config@latest`를 통해 eslint 설치
6. 위에서 만든 각각의 폴더인 components, pages에 각각의 템플릿 작성 및 main.jsx와의 연결 후 index.html과 main.jsx와 연결
7. package.json에 lint 명령어 추가 및 `pnpm add eslint-plugin-react-hooks eslint-plugin-react-refresh -D`를 통해 eslint의 react-hook과 react-refresh 플러그인 설치
8. 설치한 각각의 플러그인들을 eslint.config.js를 통해 eslint와 연결
9. 절대 경로를 위한 vite.config.js 수정 및 jsconfig.json 파일 작성
10. 절대 경로로 경로 수정 및 리드미 파일 추가

<br>

## 이번 과제를 진행하면서 느낀점

- 저번에는 npm을 사용해서 수행해서 이번에는 pnpm으로 수행해봤는데 확실히 다르면서도 같은 방식인거 같다.
- 저번에 eslint에서 react-hook과 react-refresh 때문에 고생해서 이번에는 강사님께서 알려주신대로 .npmrc를 사용해서 진행했는데 확실히 에러가 안나서 좋았다
- 이번에도 eslint를 설치하다가 실수로 명령어를 잘못 입력해서 window쪽을 건들인것 같았는데 확실히 이런 명령어를 입력할 때 주의해야겠다는 생각이 다시한번 느꼈다
- 남이 만들어준 CRA만 써보다가 내가 직접 만들어보니 처음에는 이해하기 어려웠지만 조금씩 왜 이걸 써야하는지 알수있어서 좋았다. 그래도 환경은 조금더 공부해봐야 할 것 같다
