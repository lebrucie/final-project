import { Link } from "react-router-dom";
import axios from 'axios'
import {useEffect} from 'react'



const BlogList =({ blogs }) => {
  console.log(blogs)
// let result = null;
// useEffect(async() => {
//  try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//      const { data } = await axios.get(
//       `http://localhost:8000/api/blogs`,
//       config
//     );

//     if (data) {
//         result = data;
//         console.log(data)
//     } else {
//       throw new Error("Database Error");
//     }
//   } catch (error) {
//     console.log(error);
//   }

// },[])

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
