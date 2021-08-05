import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = ({ loggedIn, setMsg }) => {
  const [blog, setBlog] = useState([]);

  const { id } = useParams();
  const history = useHistory();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => {
        const blog = res.data;
        setBlog(blog);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    axios
      .delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => {
        history.push("/");
        setMsg('Blog Successfully Deleted');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          {userId === blog.userId && loggedIn && (
            <button onClick={handleClick}>delete</button>
          )}
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
