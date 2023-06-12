import { useState } from "react";
import { formatDateTime } from "../Constants";
import Reply from "./Reply";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div className="post-grid">
      <div>1</div>
      <div>
        <p>
          <span>{comment.author.name}</span>
          &nbsp; {comment.commentBody}
        </p>
        <button>Like</button>
        <button>Reply</button>
        {comment.likeCount}
        <span>{formatDateTime(new Date(comment.createdDate))}</span>
        <hr />
        {!showReplies ? (
          <span onClick={() => setShowReplies(true)}>
            {comment.replies.length} replies
          </span>
        ) : (
          comment.replies.map((reply) => <Reply reply={reply} />)
        )}
        <hr />
      </div>
    </div>
  );
};

export default Comment;
