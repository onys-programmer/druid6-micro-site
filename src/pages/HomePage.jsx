import DownloadBtn from "./DownloadBtn";
import "./HomePage.scss";

import networkImage from "../static/network.png";
import scenarioImage from "../static/scenario.png";
import webImage from "../static/web.png";
import GppGoodIcon from "@mui/icons-material/GppGood";
import GroupsIcon from "@mui/icons-material/Groups";
import MoodIcon from "@mui/icons-material/Mood";
import Fade from "react-reveal/Fade";

export default function HomePage() {
  return (
    <div className="HomePage">
      <header className="header">
        <div className="header-background">
          <div className="header-title">
            최고의 애플리케이션 모니터링 서비스,{" "}
            <span className="product-name">Druid6</span> 입니다.
          </div>
          <div className="btn-div">
            <DownloadBtn />
          </div>
        </div>
      </header>
      <div className="content">
        <div className="content-container">
          <Fade>
            <div className="advantages">
              <div className="advantage-edge">
                <GppGoodIcon />
                <p className="advantage-title">보안적으로 안전</p>
                <p className="advantage-content">
                  Druid6는 사용자의 컴퓨터에 설치되어 독립적으로 작동합니다.
                  <br></br>
                  <br></br>
                  사용자의 PEM키가 별도의 서버에 저장되지 않기 때문에 보안에
                  대한 걱정 없이 안심하고 사용하실 수 있습니다.
                </p>
              </div>
              <div className="advantage-middle">
                <GroupsIcon />
                <p className="advantage-title">오픈소스 프리웨어</p>
                <p className="advantage-content">
                  소스 코드가 공개된 오픈소스입니다. Druid6 서비스에 관심을
                  가지고 있는 사람들이 모여 함께 만들어나가는 프로젝트입니다.
                  <br></br>
                  <br></br>
                  MIT 라이센스를 따르고 있기 때문에, 비용에 대한 부담 없이
                  무료로 사용하실 수 있습니다.
                </p>
              </div>
              <div className="advantage-edge">
                <MoodIcon />
                <p className="advantage-title">간편한 사용성</p>
                <p className="advantage-content">
                  직관적인 UI로 디자인 되어 있습니다.
                  <br></br>
                  <br></br>
                  아직 모니터링 시스템에 익숙하지 않은 초보 개발자라도 손쉽게
                  사용할 수 있습니다.
                </p>
              </div>
            </div>
          </Fade>
          <hr />
          <Fade bottom>
            <div className="server-monitoring">
              <img src={networkImage} alt="network" className="images" />
              <div className="feature-info">
                <p className="feature-name">서버 &amp; 네트워크 모니터링</p>
                <p className="feature-title">
                  한 눈에 들어오는 실시간 서버 상태
                </p>
                <p className="feature-content">
                  CPU, RAM, Disk 사용량과 실시간 트래픽 및 일별 트래픽을
                  <br></br>
                  가독성 높은 그래프로 한 눈에 확인할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="scenario-test">
              <img src={scenarioImage} alt="network" className="images" />
              <div className="feature-info">
                <p className="feature-name">시나리오 테스트</p>
                <p className="feature-title">간편하고 빠른 시나리오 테스팅</p>
                <p className="feature-content">
                  손으로 하는 테스트, 많이 번거로우셨죠?<br></br>
                  Druid6로 테스트 시나리오를 작성하여<br></br>
                  테스트 단계를 자동화하고 시간을 최적화해보세요.
                </p>
              </div>
            </div>
            <div className="server-monitoring">
              <img src={webImage} alt="network" className="images" />
              <div className="feature-info">
                <p className="feature-name">웹 퍼포먼스 테스트</p>
                <p className="feature-title">
                  타 웹페이지와 성능 비교 &amp;<br></br>시간 절감 가능 항목 추천
                </p>
                <p className="feature-content">
                  내 서버와 타 유명 사이트들의 성능 차이를 비교해보세요.
                  <br></br>
                  시간 절감을 위한 추천 항목을 참고하여<br></br>
                  사용자 경험을 향상시킬 수도 있습니다.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
