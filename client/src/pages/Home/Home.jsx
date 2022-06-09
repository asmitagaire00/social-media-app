import Topbar from "../../components/Topbar/Topbar";
import Leftbar from "../../components/Leftbar/Leftbar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import Share from "../../components/Share/Share";

import "./Home.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Home() {
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
    <div className="home">
      <Topbar />
      <div className="home-container">
        <Leftbar />
        <div className="home-feed-container">
          <Share />
          <Feed />
        </div>
        <Rightbar user={user} />
      </div>
    </div>
  );
}
