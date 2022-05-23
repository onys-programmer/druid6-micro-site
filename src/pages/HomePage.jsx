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
              <p className="feature-name">서버 모니터링</p>
              <p className="feature-title">한 눈에 들어오는 실시간 서버 상태</p>
              <p className="feature-content">
                CPU, RAM, Disk 사용량과 실시간 트래픽 및 일별 트래픽을<br></br>
                그래프로 한 눈에 확인해 보세요.
              </p>
            </div>
          </div>
          <hr />
          {/* <div className="web-performance-monitoring">
            CPU, RAM, Disk 사용량을 한 눈에 확인하세요.
          </div> */}
        </div>
      </div>
    </div>
  );
}
