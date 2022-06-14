import "./Share.css";
import {
  AddAPhoto,
  Label,
  AddLocationRounded,
  EmojiEmotionsRounded,
  Cancel,
} from "@mui/icons-material";
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { LoginContext } from "../../context/LoginContext";

export default function Share() {
  const [file, setFile] = useState(null);
  const desc = useRef();
  const { user } = useContext(LoginContext);

  const handleShareSubmit = async (e) => {
    console.log("myfile", file, desc.current.value);
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("error in data", err);
      }
    }

    try {
      console.log("newPost from share component", newPost);
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log("couldnot post from Share", err);
    }
    desc.current.value = "";
  };
  // eslint-disable-next-line no-undef
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noavatar.jpeg"
            }
            alt="profile-picture"
            className="share-top-image"
          />
          <input
            type="text"
            placeholder={"What's happening " + user.username + "?"}
            className="share-top-input"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form
          action="/upload"
          onSubmit={handleShareSubmit}
          className="share-bottom"
        >
          <div className="share-bottom-left">
            <label htmlFor="myfile" className="share-bottom-item">
              <AddAPhoto className="share-bottom-icon" />
              <span className="share-bottom-item-text">Photo/Video</span>
              <input
                type="file"
                id="myfile"
                accept=".jpg, .jpeg, .png, .webp"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
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
            <button className="share-button" type="submit">
              Share
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
