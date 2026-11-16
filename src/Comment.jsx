function Comment({ author, text, likes, onLike }) {
  return (
    <div className="comment">
      <div className="avatar">{author.charAt(0).toUpperCase()}</div>
      <div className="bubble">
        <strong className="author">{author}</strong>
        <p className="text">{text}</p>
        <button className="like-btn" onClick={onLike}>
          <span className="heart">♥</span> {likes}
        </button>
      </div>
    </div>
  );
}

export default Comment;