import axios from "axios";

const create = async (title, body, author) => {
  console.log('blogCreate')
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8000/api/blogs/create`,
      { title, body, author },
      config
    );

    if (data) {
        console.log(data)
    } else {
      throw new Error("Database Error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default create