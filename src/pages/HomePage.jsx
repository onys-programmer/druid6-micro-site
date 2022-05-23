import DownloadBtn from "./DownloadBtn";
import "./HomePage.scss";

import networkImage from "../static/network.png";

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
          <div className="server-monitoring">
            <img src={networkImage} alt="network" className="images" />
            <div className="server-monitoring-info">
              <p className="feature-name">서버 &amp; 네트워크 모니터링</p>
              <p className="feature-title">한 눈에 들어오는 실시간 서버 상태</p>
              <p className="feature-content">
                CPU, RAM, Disk 사용량과 실시간 트래픽 및 일별 트래픽을<br></br>
                가독성 높은 그래프로 한 눈에 확인할 수 있습니다.
              </p>
            </div>
          </div>
          <hr />
          <div className="scenario-test">
            <img src={networkImage} alt="network" className="images" />
            <div className="server-monitoring-info">
              <p className="feature-name">시나리오 테스트</p>
              <p className="feature-title">간편하고 빠른 시나리오 테스팅</p>
              <p className="feature-content">
                손으로 하는 테스트, 많이 번거로우셨죠?<br></br>
                Druid6로 테스트 시나리오를 작성하여<br></br>
                테스트 단계를 자동화하고 시간을 최적화해보세요.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
