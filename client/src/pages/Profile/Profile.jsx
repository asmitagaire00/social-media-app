import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Profilebar from "../../components/Profilebar/Profilebar";

import axios from "axios";
import { useState, useEffect } from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    }
    fetchUser();
  }, [username]);

  return (
    <div>
      <Topbar />
      <div className="profile-container">
        <Leftbar />
        <div className="profile-feed-container">
          <Profilebar user={user} />
          <Feed username={username} />
        </div>
        <Rightbar user={user} />
      </div>
    </div>
  );
}
