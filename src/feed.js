import "./feed.css";
import MessageCard from "./messageCard";
import Post from "./post";
import Reels from "./reels";
import db from "./firebase";
import { useEffect, useState } from "react";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className='feed'>
      <Reels />
      <MessageCard />
      {posts.map((post) => (
        <Post
          key={post.id}
          profile={post.data.profilePic}
          message={post.data.message}
          image={post.data.image}
          username={post.data.username}
          timestamp={post.data.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
