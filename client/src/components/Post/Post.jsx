import "./Post.css";
import { MoreVertSharp, ThumbUpSharp, Favorite } from "@mui/icons-material";

export default function Post() {
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
              <span className="post-left-profile-username">Ash Vyash</span>
              <span className="post-time">10 mins ago</span>
            </div>
          </div>
          <div className="post-right">
            <MoreVertSharp className="post-right-icon" />
          </div>
        </div>
        <div className="post-center">
          <span className="post-center-text">This is my first post</span>
          <img src="assets/profile.jpg" alt="image" className="post-images" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <ThumbUpSharp className="post-icon-like" />
            <Favorite className="post-icon" />
            <span className="post-like">20 People likes </span>
          </div>
          <div className="post-bottom-right">
            <span>5 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
