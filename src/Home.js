import BlogList from "./BlogList";
import axios from "axios";
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import get_blog from "./actions/blogGet";



const Home =   () => {


const getData = async()=>{
 const data = await get_blog();
  console.log(data)
return data
}
const [result, setResult] = useState([])





// console.log(data)

// let blogs = null
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
//         setResult(data);
//         console.log(result)
//     } else {
//       throw new Error("Database Error");
//     }
//   } catch (error) {
//     console.log(error);
//   }

// },[])





  return (
    // null
    <div className="home">

      {/* <div className="blog-list">
      {result.map((blog) => (
        <div className="blog-preview" key={blog._id}>
          <Link to={`/blogs/${blog._id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div> */}
  
    </div>
  );
};

export default Home;
