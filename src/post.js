import { Avatar } from "@material-ui/core";
import "./post.css";
import { FaThumbsUp } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
const Post = ({ profile, image, username, timestamp, message }) => {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profile} className='post__avatar' />
        <div className='post__topinfo'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className='post__bottom'>
        <p>{message}</p>
      </div>
      <div className='post__image'>
        <img src={image} alt='' />
      </div>
      <div className='post__menus'>
        <div className='post__menu'>
          <FaThumbsUp />
          <p>Like</p>
        </div>
        <div className='post__menu'>
          <FaCommentAlt />
          <p>Comment</p>
        </div>
        <div className='post__menu'>
          <FaShare />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
