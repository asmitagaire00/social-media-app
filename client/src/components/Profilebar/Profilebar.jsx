import { ArrowBack } from "@mui/icons-material";

import "./Profilebar.css";

export default function Profilebar() {
  return (
    <div className="profilebar">
      <div className="profilebar-wrapper">
        <div className="profilebar-username-wrapper">
          <ArrowBack className="profilebar-arrow" />
          <div className="profilebar-top-username-wrapper">
            <span className="profilebar-username">
              <b>Ash Vyash</b>
            </span>
            <span className="profilebar-total-post">20 Posts</span>
          </div>
        </div>
        <div className="profilebar-image-container">
          <img
            src="assets/wallpaper.webp"
            alt="profile cover photo"
            className="profilebar-cover-photo"
          />
          <img
            src="assets/profile.jpg"
            alt="profile-picture"
            className="profilebar-profile-picture"
          />
          <button className="profilebar-edit-button">Edit profile</button>
        </div>
        <div className="profilebar-profile-details-wrapper">
          <div className="profilebar-username-details">
            <span className="profilebar-username">
              <b>Ash Vyash</b>
            </span>
            <span className="profilebar-email">ashvyash@gmail.com</span>
          </div>
          <span className="profilebar-profile-joined-date">
            Joined May 2019
          </span>
          <div className="profilebar-following-wrapper">
            <span className="profile-following">
              <b>163</b> Following
            </span>
            <span className="profile-followers">
              <b>36</b> Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
