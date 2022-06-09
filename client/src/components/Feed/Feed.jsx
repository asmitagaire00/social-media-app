import Post from "../Post/Post";
import axios from "axios";
import "./Feed.css";
import { useState, useEffect, useContext } from "react";
import Proptypes from "prop-types";
import { LoginContext } from "../../context/LoginContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(LoginContext);

  useEffect(() => {
    async function fetchPost() {
      const response = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPosts(
        response.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    }
    fetchPost();
  }, [username, user.id]);

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
