# 오픈소스 컨트리뷰트 가이드

## **개발 서버 실행하기**

1. `yarn install` 명령어를 사용하여 node_modules를 다운받습니다.
2. `yarn electron:serve` 명령어를 사용하여 hot-reloading 일렉트론 개발 서버를 시작합니다.

### 

## 기여방법

Druid6에 기여하고 싶으신가요?



### **가이드라인**

이 문서는 목적이 다른 여러 섹션으로 나뉘게 됩니다. 문장을 추가할 계획이라면, 적절한 섹션에 대한 [가이드라인](https://github.com/Druid6/druid6)을 숙지하는 것이 도움이 될 것입니다.



### **브랜치(branch) 만들기**

1. 로컬 저장소에서 `git checkout master`를 실행합니다.
2. `git pull origin master`를 실행하여 최신 원본 코드를 보장할 수 있습니다.
3. `git checkout -c the-name-of-my-branch` (`the-name-of-my-branch` 를 적절한 이름으로 교체)를 실행하여 브랜치를 만들고 그 브랜치로 이동합니다.



### **수정하기**

1. "개발 서버 실행하기" 부분을 따릅니다.
2. 파일을 저장하고 일렉트론 앱에서 확인합니다. 
     1. `src`안에 있는 React 컴포넌트가 수정될 경우 hot-reload가 적용됩니다.
        1. `content`안에 있는 마크다운 파일이 수정될 경우 hot-reload가 적용됩니다.
        2. 플러그인을 사용하는 경우, `.cache` 디렉토리를 제거한 후 서버를 재시작해야 합니다.




### **수정사항 체크하기**

1. 가능하다면, 변경한 부분에 대해서 많이 사용하는 브라우저의 최신 버전에서 시각적으로 제대로 적용되었는지 확인해주세요. (데스크탑과 모바일 모두)
2. 프로젝트 루트에서 `yarn check-all`를 실행합니다. (이 명령어는 Prettier, ESLint, 그리고 Flow를 실행합니다.)



### **Push 하기**

1. `git add -A && git commit -m "My message"` (`My message` 부분을 `Fix header logo` 같은 커밋 메시지로 교체)를 실행하여 변경한 파일들을 commit 해주세요.
2. [Druid6 repo](https://github.com/Druid6/druid6)에서 최근에 푸시된 브랜치를 볼 수 있습니다.
3. Github 지침을 따라주세요.
4. 가능하다면 시각적으로 변화된 부분의 스크린샷을 첨부해주세요. PR을 만들고 다른사람들이 수정사항을 볼 수 있게되면 자동으로 빌드할 것입니다.

