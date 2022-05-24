import { Message, Person, Search, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <p className="logo">Social</p>
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
          <Link to="/">
            <span className="topbar-links-homepage">Homepage</span>
          </Link>
          <Link to="profile/:username">
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
          <Link to="profile/:username">
            <img
              src="assets/profile.jpg"
              alt="profile picture"
              className="topbar-profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
