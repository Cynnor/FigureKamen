import Carosell from "../../component/carosell/index,";
import Header from "../../component/header";

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage__banner">
        <Carosell />
      </div>
      <div className="homePage__figure"></div>
    </div>
  );
}

export default HomePage;
