import { useState } from "react";
import { useHistory } from "react-router-dom";
import newBlog from "./actions/blogCreate";

const Create = ({setMsg}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && body) {
      const userId = localStorage.getItem("userId");
      const status = newBlog(title, body, userId);
      if (status) {
        history.push("/");

        setMsg('Blog Successfully Created')
        
      }
    } else {
      console.log("Please fill all fields");
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
