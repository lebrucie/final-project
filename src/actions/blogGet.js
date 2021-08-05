import axios from "axios";

const get_blog = async (title, body, author) => {
  console.log('blogCreate')
 try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

     const { data } = await axios.get(
      `http://localhost:8000/api/blogs`,
      config
    );
    return data

    // if (data) {
    // console.log(data)
    // return data
    //     // console.log(result)
    // } else {
    //   throw new Error("Database Error");
    // }
  } catch (error) {
    console.log(error);
  }

};

export default get_blog