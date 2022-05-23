import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Share from "../../components/Share/Share";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="home-container">
        <Leftbar />
        <div className="home-feed-container">
          <Share />
          <Feed />
        </div>
        <Rightbar />
      </div>
    </div>
  );
}
