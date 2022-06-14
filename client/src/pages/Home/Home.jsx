import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

import "./Home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="home">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
