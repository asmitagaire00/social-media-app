import { Message, Person, Search, Notifications } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "./Topbar.css";

export default function Topbar() {
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(LoginContext);

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="logo">Social</p>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Seach your friend"
            className="search-text"
          />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbar-links-homepage">Homepage</span>
          </Link>
          <Link
            to={`profile/${user.username}`}
            style={{ textDecoration: "none" }}
          >
            <span className="topbar-links-timeline">Timeline</span>
          </Link>
        </div>
        <div className="topbar-icon">
          <div className="topbar-icon-item">
            <Person className="icon" />
            <span className="topbar-icon-notify">1</span>
          </div>
          <div className="topbar-icon-item">
            <Message className="icon" />
            <span className="topbar-icon-notify">2</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications className="icon" />
            <span className="topbar-icon-notify">3</span>
          </div>
        </div>
        <div className="topbar-profile">
          <Link to={`profile/${user.username}`}>
            <img
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "noavatar.jpeg"
              }
              alt="profile picture"
              className="topbar-profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
