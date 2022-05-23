import "./Share.css";
import {
  AddAPhoto,
  Label,
  AddLocationRounded,
  EmojiEmotionsRounded,
} from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src="assets/profile.jpg"
            alt="profile-picture"
            className="share-top-image"
          />
          <input
            type="text"
            placeholder="What's happening.."
            className="share-top-input"
          />
        </div>
        <hr className="shareHr" />
        <div className="share-bottom">
          <div className="share-bottom-left">
            <div className="share-bottom-item">
              <AddAPhoto className="share-bottom-icon" />
              <span className="share-bottom-item-text">Photo/Video</span>
            </div>
            <div className="share-bottom-item">
              <Label className="share-bottom-icon" />
              <span className="share-bottom-item-text">Tag</span>
            </div>
            <div className="share-bottom-item">
              <AddLocationRounded className="share-bottom-icon" />
              <span className="share-bottom-item-text">Location</span>
            </div>
            <div className="share-bottom-item">
              <EmojiEmotionsRounded className="share-bottom-icon" />
              <span className="share-bottom-item-text">Feelings</span>
            </div>
          </div>
          <div className="share-bottom-right">
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
