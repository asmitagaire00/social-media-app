import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Profilebar from "../../components/Profilebar/Profilebar";

import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile-container">
        <Leftbar />
        <div className="profile-feed-container">
          <Profilebar />
          <Feed />
        </div>
        <Rightbar profile />
      </div>
    </div>
  );
}
