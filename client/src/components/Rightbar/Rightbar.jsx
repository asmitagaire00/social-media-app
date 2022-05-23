import "./Rightbar.css";

// eslint-disable-next-line react/prop-types
export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <div className="homerightbar">
        <div className="birthday-wrapper">
          <img
            src="assets/birthday.jpg"
            alt="birthday emo"
            className="birthday-emo"
          />
          <span className="birthday-text">
            <b>Kish Vish</b>and <b>2 other friends</b> have birthday today!
          </span>
        </div>
        <img
          src="assets/rightbar-party.jpg"
          alt="party photo"
          className="rightbar-party-img"
        />
        <div className="rightbar-online">
          <b className="online-text">Online Friends</b>
          <ul className="online-list">
            <li className="online-item">
              <div className="online-image-wrapper">
                <img
                  src="assets/profile.jpg"
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
                  src="assets/profile.jpg"
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
                  src="assets/profile.jpg"
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
            src="assets/birthday.jpg"
            alt="images"
            className="profilerighbar-user-images"
          />
          <img
            src="assets/birthday.jpg"
            alt="images"
            className="profilerighbar-user-images"
          />
          <img
            src="assets/birthday.jpg"
            alt="images"
            className="profilerighbar-user-images"
          />
          <img
            src="assets/birthday.jpg"
            alt="images"
            className="profilerighbar-user-images"
          />
        </div>
        <div className="profilerightbar-user-userfriends">
          <span className="userfriends">
            <b>User Friends</b>
          </span>
          <div className="userfriends-wrapper">
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
            <div className="userfriends-item">
              <img
                src="assets/profile.jpg"
                alt="image"
                className="profilerightbar-userfriends-profile-picture"
              />
              <span>User name</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
