import "./Dialog.css";
import PropTypes from "prop-types";
import axios from "axios";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

function Dialog({
  children,
  title,
  open,
  handleClose,
  user,
  username,
  desc,
  city,
}) {
  const { user: currentUser } = useContext(LoginContext);

  if (!open) return <></>;
  const handleSaveButton = async () => {
    const updateUser = {
      username: username.current.value,
      desc: desc.current.value,
      city: city.current.value,
    };
    console.log("updateuser", updateUser);
    if (user?._id === currentUser._id) {
      try {
        await axios.put("/users/" + user?._id, {
          desc: updateUser.desc,
          city: updateUser.city,
          userId: currentUser._id,
        });
        console.log("updated user", user);
      } catch (err) {
        console.log("error from save button", err);
      }
    }
    handleClose(!open);
  };

  return (
    <div className={open ? "dialog" : "dialog--hide"}>
      <div className="dialog__title">
        <div className="dialog-profile-edit-text">
          <button
            className="dialog-close-button"
            onClick={() => handleClose(!open)}
          >
            ❌
          </button>
          <span>{title}</span>
        </div>
        <button onClick={handleSaveButton} className="save-button">
          Save
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.object,
  username: PropTypes.object,
  desc: PropTypes.object,
  city: PropTypes.object,
};

export default Dialog;
