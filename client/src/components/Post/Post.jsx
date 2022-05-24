import "./Post.css";
import { MoreVertSharp, ThumbUpSharp, Favorite } from "@mui/icons-material";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { format } from "timeago.js";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const handleLikeButton = (e) => {
    e.preventDefault();
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked);
    console.log("clicked");
  };

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`users/${post.userId}`);
      // console.log("users data", response.data);
      setUser(response.data);
    }
    fetchUser();
  }, []);

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-left">
            <img
              src="assets/profile.jpg"
              alt="image"
              className="post-left-profile"
            />
            <div className="post-left-text">
              <span className="post-left-profile-username">
                {user.username}
              </span>
              <span className="post-time">{format(post.createdAt)}</span>
            </div>
          </div>
          <div className="post-right">
            <MoreVertSharp className="post-right-icon" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-center-text">{post.desc}</span>
          <img src="assets/profile.jpg" alt="image" className="post-images" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpSharp
              className="post-icon-like"
              onClick={handleLikeButton}
            />
            <Favorite className="post-icon" onClick={handleLikeButton} />
            <span className="post-like">{like} People likes </span>
          </div>
          <div className="post-bottom-right">
            <span>{post.comments.length} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};
