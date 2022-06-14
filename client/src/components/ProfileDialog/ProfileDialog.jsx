import "./ProfileDialog.css";
import PropTypes from "prop-types";

export default function ProfileDialog({ user, username, desc, city }) {
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profile-dialog">
      <div className="profile-dialog">
        <div className="dialog-center">
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
          </div>
        </div>
        <div className="dialog-bottom">
          <div className="dialog-bottom-item">
            <input type="text" ref={username} className="dialog-bottom-input" />
            <label className="dialog-bottom-input-label">Username:</label>
          </div>
          <div className="dialog-bottom-item">
            <textarea
              name="description"
              cols="30"
              rows="5"
              ref={desc}
              className="dialog-bottom-input"
            ></textarea>
            <label className="dialog-bottom-input-label">Desc</label>
          </div>
          <div className="dialog-bottom-item">
            <input type="text" className="dialog-bottom-input" ref={city} />
            <label className="dialog-bottom-input-label">City</label>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfileDialog.propTypes = {
  user: PropTypes.object,
  username: PropTypes.object,
  desc: PropTypes.object,
  city: PropTypes.object,
};
