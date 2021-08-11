import { Avatar } from "@material-ui/core";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { useState } from "react";
import "./messageCard.css";
import { useStateValue } from "./stateProvider";
import db from "./firebase";
import firebase from "firebase";
const MessageCard = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgUrl,
    });

    setInput("");
    setImgUrl("");
  };
  return (
    <div className='messageCard'>
      <div className='messageCard__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='messageCard__input'
            placeholder={`what's on your mind, ${user.displayName}?`}
          />
          <input
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            placeholder='Image URl (optional)'
          />
          <button onClick={handleSubmit} type='submit'>
            hidden button
          </button>
        </form>
      </div>
      <div className='messageCard__bottom'>
        <div className='messageCard__menu'>
          <BsFillCameraVideoFill style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageCard__menu'>
          <BsFillImageFill style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageCard__menu'>
          <FaRegSmileBeam style={{ color: "orange" }} />
          <h3>Feelings/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
