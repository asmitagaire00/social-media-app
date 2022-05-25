import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";
import { useState, useEffect } from "react";
import Proptypes from "prop-types";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/628c19d188c621a89e9f8a71");
      // console.log("timeline data", response.data);
      setPosts(response.data);
    }
    fetchPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feed-container">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </div>
  );
}

Feed.propTypes = {
  username: Proptypes.string,
};
