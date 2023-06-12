import { useEffect, useState } from "react";
import { getPostById } from "../apis/PostApi";
import Post from "../components/Post";

const PostScreen = () => {
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostById("123").then(({ data: foundPost }) => {
      setPost(foundPost);
    });
  }, []);

  return Object.keys(post).length ? (
    <div className="screen">
      <Post post={post} />
    </div>
  ) : (
    "Loading ..."
  );
};

export default PostScreen;
