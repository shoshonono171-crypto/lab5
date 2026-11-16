import { useState } from "react";
import Comment from "./Comment";
import "./App.css";

const initialComments = [
  { id: 1, author: "Sara", text: "Great explanation of components!", likes: 5 },
  { id: 2, author: "Omar", text: "Props finally make sense to me.", likes: 2 },
  { id: 3, author: "Ali", text: "Can we do a lab on useState next week?", likes: 7 },
  { id: 4, author: "You", text: "Thanks for the lab, this was fun!", likes: 0 },
];

function App() {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState("");

  const addComment = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newComment = {
      id: Date.now(),
      author: "You",
      text: trimmed,
      likes: 0,
    };

    setComments([...comments, newComment]);
    setText("");
  };

  const handleLike = (id) => {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <div className="comments-section">
      <h2>Comments ({comments.length})</h2>

      <div className="comment-form">
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addComment()}
        />
        <button onClick={addComment}>Post</button>
      </div>

      <div className="comment-list">
        {comments.map((c) => (
          <Comment
            key={c.id}
            author={c.author}
            text={c.text}
            likes={c.likes}
            onLike={() => handleLike(c.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;