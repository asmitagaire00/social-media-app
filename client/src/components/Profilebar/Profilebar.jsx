import { ArrowBack } from "@mui/icons-material";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Profilebar.css";

export default function Profilebar({ user }) {
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profilebar">
      <div className="profilebar-wrapper">
        <div className="profilebar-username-wrapper">
          <Link to="/">
            <ArrowBack className="profilebar-arrow" />
          </Link>
          <div className="profilebar-top-username-wrapper">
            <span className="profilebar-username">
              <b>{user.username}</b>
            </span>
            <span className="profilebar-total-post">20 Posts</span>
          </div>
        </div>
        <div className="profilebar-image-container">
          <img
            src={`${PF}wallpaper.webp`}
            alt="profile cover photo"
            className="profilebar-cover-photo"
          />
          <img
            src={`${PF}profile.jpg`}
            alt="profile-picture"
            className="profilebar-profile-picture"
          />
          <button className="profilebar-edit-button">Edit profile</button>
        </div>
        <div className="profilebar-profile-details-wrapper">
          <div className="profilebar-username-details">
            <span className="profilebar-username">
              <b>{user.username}</b>
            </span>
            <span className="profilebar-email">{user.email}</span>
          </div>
          <span className="profilebar-profile-joined-date">
            Joined May 2019
          </span>
          <div className="profilebar-following-wrapper">
            <span className="profile-following">
              <b>{user.followings}</b> Following
            </span>
            <span className="profile-followers">
              <b>{user.followers}</b> Followers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Profilebar.propTypes = {
  user: PropTypes.object,
};
