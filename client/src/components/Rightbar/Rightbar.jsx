import "./Rightbar.css";
import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Rightbar({ user }) {
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser } = useContext(LoginContext);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          "/users/friends/" + currentUser?._id
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log("error in getFriends", err);
      }
    };
    getFriends();
  }, [currentUser]);

  const HomeRightbar = () => {
    return (
      <div className="homerightbar">
        <div className="birthday-wrapper">
          <img
            src={`${PF}birthday.jpg`}
            alt="birthday emo"
            className="birthday-emo"
          />
          <span className="birthday-text">
            <b>Kish Vish</b>and <b>2 other friends</b> have birthday today!
          </span>
        </div>
        <img
          src={`${PF}rightbar-party.jpg`}
          alt="party photo"
          className="rightbar-party-img"
        />
        <div className="rightbar-online">
          <b className="online-text">Online Friends</b>
          <ul className="online-list">
            <li className="online-item">
              <div className="online-image-wrapper">
                <img
                  src={`${PF}profile.jpg`}
                  alt="profile picture"
                  className="online-profile-picture"
                />
                <span className="online-dot-color"></span>
              </div>
              <span className="online-item-username">Ram Ram</span>
            </li>
            <li className="online-item">
              <div className="online-image-wrapper">
                <img
                  src={`${PF}profile.jpg`}
                  alt="profile picture"
                  className="online-profile-picture"
                />
                <span className="online-dot-color"></span>
              </div>
              <span className="online-item-username">Ram Ram</span>
            </li>
            <li className="online-item">
              <div className="online-image-wrapper">
                <img
                  src={`${PF}profile.jpg`}
                  alt="profile picture"
                  className="online-profile-picture"
                />
                <span className="online-dot-color"></span>
              </div>
              <span className="online-item-username">Ram Ram</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div className="profilerightbar">
        <div className="profilerightbar-image-wrapper">
          <img
            src={`${PF}birthday.jpg`}
            alt="images"
            className="profilerighbar-user-images"
          />
          <img
            src={`${PF}birthday.jpg`}
            alt="images"
            className="profilerighbar-user-images"
          />
        </div>
        <div className="profilerightbar-user-userfriends">
          <span className="userfriends">
            <b>User Friends</b>
          </span>
          <div className="userfriends-wrapper">
            {friends.map((friend) => {
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className="userfriends-item">
                  <img
                    src={
                      friend.profilePicture
                        ? PF + friend.profilePicture
                        : PF + "noavatar.jpeg"
                    }
                    alt=""
                  />
                  <span>{friend.username}</span>
                </div>
                ;
              </Link>;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

Rightbar.propTypes = {
  user: PropTypes.object,
};
