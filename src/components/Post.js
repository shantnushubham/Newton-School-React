import { formatDate } from "../Constants";
import Comment from "./Comment";

const Post = ({ post }) => {
  return (
    <>
      <div className="post-grid">
        <div>1</div>
        <div>
          <h5>{post.author.name}</h5>
          <p>{post.postBody}</p>
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
          <span>{formatDate(new Date(post.createdDate))}</span>
          <div
            style={{
              background: "cyan",
            }}
          >
            <p>{post.likeCount} people like this.</p>
            <p>{post.shareCount} shares.</p>
            {post.comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
