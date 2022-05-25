import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Profilebar from "../../components/Profilebar/Profilebar";

import axios from "axios";
import { useState, useEffect } from "react";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`/users?username=Ram`);
      // console.log("users data", response.data);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="profile-container">
        <Leftbar />
        <div className="profile-feed-container">
          <Profilebar user={user} />
          <Feed username="Ram" />
        </div>
        <Rightbar profile />
      </div>
    </div>
  );
}
