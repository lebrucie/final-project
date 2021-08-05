import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs`)
      .then((res) => {
        const blogs = res.data;
        setAllBlogs(blogs);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home">
      <div className="blog-list">
        {allBlogs.map((blog) => (
          <div className="blog-preview" key={blog._id}>
            <Link to={`/blogs/${blog._id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
