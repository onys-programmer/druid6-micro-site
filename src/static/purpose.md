# 무엇을 할 수 있나요?

druid6는 정적 및 동적 자원 애플리케이션의 시나리오 시뮬레이션 하는 데 사용할 수 있습니다.

서버의 CPU, Memory, 네트워크등 다양한 정보를 실시간으로 모니터링할 수 있습니다. 

웹페이지를 모바일, 데스크탑 디바이스로 나누어 성능을 측정하고, 그 결과를 바탕으로 속도를 개선하는 데 도움을 줍니다.

###

## Get it started

**Druid6는 브라우저가 아닙니다.**

Desktop Application입니다.

다운로드하시려면 [이 곳](https://github.com/Druid6/druid6)을 클릭하세요.

###

## Tutorials

- 설치하기
  - 해당 [주소](https://github.com/Druid6/druid6) 로 접속해 프로젝트를 다운받습니다.
  - `npm install` 또는 `yarn install` 을 이용해 프로젝트 node module들을 설치합니다.
  - `npm run electron:serve` 또는 `yarn electron:serve` 를 이용해 프로젝트를 실행할 수 있습니다.
  
  ###

- 시작하기
  - 서버 ip(또는 서버 url), 서버명, pem 파일을 업로드하고 접속 버튼을 클릭합니다.
  - 접속을 눌렀을 때 vnstat이 해당 서버에 없으면 설치하겠습니까 라는 메세지가 출력됩니다.
  - `예`를 누르면 vnstat가 설치되고 네트워크 모니터링도 동작합니다.
  - `아니오`를 누르면 네트워크 모니터링은 이용 불가합니다.

  ###

- 서버 모니터링
  - 상단박스에서 주요 서버 정보를 확인 가능합니다.
  - 하단 박스에서 실시간 CPU, RAM, DISK 사용량을 확인가능합니다.

  ###

- 네트워크 모니터링
  - 해당 서버의 transmit, recieve 트래픽을 실시간으로 원형 그래프와 막대 그래프를 통해 확인 가능합니다.
  - 아래 박스에서는 일별 트래픽을 막대 그래프에서 확인 가능합니다.

  ###

- 시나리오 테스트
  - 현재는 `GET` , `POST` 메소드만 이용해서 시나리오를 작성할 수 있습니다.
  - `query parameter` 방식과 `path variable` 방식은 url에 직접 입력해야합니다.

  ###

- 웹 퍼포먼스 테스트
  - 입력한 URL로 웹 퍼포먼스를 테스트할 수 있습니다.
  - 웹 퍼포먼스의 점수 계산 방식은 `https://web.dev/performance-scoring/?utm_source=lighthouse&utm_medium=lr`을 참고하세요.
  - 왼쪽 탭을 눌러 `desktop`, `mobile` 각각의 결과를 확인할 수 있습니다.
  - 구글, 네이버, 빙, 다음 등의 다른 사이트와 웹 퍼포먼스를 비교할 수 있습니다.
  - 웹 퍼포먼스를 향상시킬 수 있는 사항들을 추천합니다.

