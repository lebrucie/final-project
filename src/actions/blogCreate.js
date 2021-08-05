import axios from "axios";

const create = async (title, body, author, userId) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/blogs/create`,
      { title, body, author, userId },
      config
    );

    if (data) {
      return true;
    } else {
      throw new Error("Database Error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default create;
