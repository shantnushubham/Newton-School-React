import { formatDateTime } from "../Constants";

const Reply = ({ reply }) => {
  return (
    <div className="post-grid">
      <div>1</div>
      <div>
        <p>
          <span>{reply.author.name}</span>
          &nbsp; {reply.replyBody}
        </p>
        <button>Like</button>
        {reply.likeCount}
        <span>{formatDateTime(new Date(reply.createdDate))}</span>
        <hr />
      </div>
    </div>
  );
};

export default Reply;
