// import ProfileDialog from "../ProfileDialog/ProfileDialog";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/LoginContext";
import axios from "axios";

import { ArrowBack } from "@mui/icons-material";
import "./Profilebar.css";
import { useState } from "react";
import ProfileDialog from "../ProfileDialog/ProfileDialog";
import Dialog from "../Dialog/Dialog";

import { useRef } from "react";

export default function Profilebar({ user }) {
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isFollowing, setIsFollowing] = useState(false);
  const { user: currentUser } = useContext(LoginContext);
  const [editProfileDialogOpen, setEditProfileDialogOpen] = useState(false);

  const username = useRef();
  const desc = useRef();
  const city = useRef();

  const handleClose = (val) => {
    setEditProfileDialogOpen(val);
  };

  useEffect(() => {
    setIsFollowing(currentUser.followings.includes(user?.id));
  }, [currentUser, user.id]);

  const handleFollowButton = async (e) => {
    e.preventDefault();
    try {
      if (isFollowing) {
        await axios.put("/users/" + user._id + "/follow", {
          userId: currentUser._id,
        });
        console.log("isFollowing");
      } else {
        await axios.put("/users/" + user._id + "/unfollow", {
          userId: currentUser._id,
        });
        console.log("isnotfollowing");
      }
    } catch (err) {
      console.log("error in handlefollowbutton", err);
    }
    setIsFollowing(!isFollowing);
  };

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
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noavatar.jpeg"
            }
            alt="profile-picture"
            className="profilebar-profile-picture"
          />
          {user.username !== currentUser.username ? (
            <button
              className="profilebar-edit-button"
              onClick={handleFollowButton}
            >
              {isFollowing ? "Follow" : "Unfollow"}
            </button>
          ) : (
            <button
              className="profilebar-edit-button"
              onClick={() => setEditProfileDialogOpen(true)}
            >
              Edit Profile
            </button>
          )}
        </div>

        <Dialog
          title="Edit Profile"
          open={editProfileDialogOpen}
          handleClose={handleClose}
          user={user}
          username={username}
          desc={desc}
          city={city}
        >
          <ProfileDialog
            user={user}
            username={username}
            desc={desc}
            city={city}
          />
        </Dialog>

        <div className="profilebar-profile-details-wrapper">
          <div className="profilebar-username-details">
            <span className="profilebar-username">
              <b>{user?.username}</b>
            </span>
            <span className="profilebar-email">{user?.email}</span>
          </div>
          <span className="profilebar-profile-joined-date">
            Joined May 2019
          </span>
          <div className="profilebar-following-wrapper">
            <span className="profile-following">
              <b>{user?.followings?.length}</b> Following
            </span>
            <span className="profile-followers">
              <b>{user?.followers?.length}</b> Followers
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
