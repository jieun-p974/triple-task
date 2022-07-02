# 트리플 사전과제

## 요구사항

- 문구, 이미지 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다.(단, 반응형 레이아웃은 고려하지 않고 최소 화면 폭은 1200px로 고정)
- React를 이용하여 개발합니다.(그 외의 개발 스택은 자유)
- Google Chrome 최신 버전에서 동작해야 합니다.
- 애니메이션 명세
  - 영역별 등장 애니메이션은 좌측 이미지, 지표 문구, 수상 내역 순으로 등장해야 하고 떠오르는 듯한 애니메이션과 투명도 조절 애니메이션을 적용해야 합니다.(duratino 700ms, 애니메이션 사이 간격 100ms)
  - 숫자 올라가는 애니메이션은 각 숫자가 0부터 시작하고 2초 동안 동시에 증가하고 동시에 끝나야 하며 증가 속도가 느려지는 효과를 구현해야 합니다.(React와 DOM API만을 이용해서 구현해야 합니다.)

## 프로젝트 실행 방법

1. 배포 링크
   - https://jieun-p974.github.io/triple-task/
2. 프로젝트 실행방법
   - git clone
   - npm install
   - npm start

## 사용한 기술과 선택한 이유

- React, JavaScript, Styled Component
- JavaScript
  > 익숙한 언어로 개발함으로써 실수를 줄일 수 있습니다.
- Styled Component
  > 자유롭게 CSS 커스텀 컴포넌트를 만들 수 있습니다.  
  > 클래스명을 스스로 생성하기 때문에 중복이나 오타로 인한 버그를 줄일 수 있습니다.  
  > 컴포넌트와 특정 스타일이 연결되어 있어 컴포넌트를 삭제하면 스타일도 함께 지워집니다. 그로인해 삭제하지 못한 CSS 파일로 인한 버그를 줄일 수 있습니다.

## 어려웠던 점

- 왼쪽의 이미지 출력
  - 어려웠던 점: 화면의 왼쪽에 출력되는 이미지와 텍스트가 겹쳐져 있어 div태그의 background-image로 이미지를 출력하고 div 태그 안에 텍스트를 작성했습니다. 하지만 사진의 오른쪽 귀퉁이가 계속 잘려서 출력됐습니다.
  - 해결방법: 로고 이미지는 img태그로 설정하고 텍스트는 div 태그로 작성한 다음 transform으로 위치를 지정해서 해결했습니다.
- 숫자 상승 애니메이션
  - 어려웠던 점: 숫자가 올라가는 애니메이션은 countup을 사용했지만 점점 숫자가 올라가는 속도를 느리게 하는데서 어려움을 겪었습니다. easingFn을 사용해 속도를 조절할 수 있다는 것을 알게 되었지만 함수 식이 복잡해 이해가 가지 않았습니다.
  - 해결방법: 숫자가 올라가는 속도를 string(또는 함수)으로 조절할 수 있는 use-count-up을 찾았고 use-count-up을 사용해 속도 조절에도 성공했습니다.

## 파일 구조

```bash
src
├── components
│   ├── Logo.js
│   ├── Number.js
│   └── Stores.js
├── img
│   ├── badge-apple4x.png
│   ├── play-store2x.png
│   └── triple2x.png
└── styles
│   ├── FadeInAnimation.js
│   └── GlobalStyle.js
```
