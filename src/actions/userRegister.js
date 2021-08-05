import axios from "axios";

const register = async (email, password) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8000/api/users/signup`,
      { email, password },
      config
    );

    if (data) {
      localStorage.setItem("userInfo", JSON.stringify(data));
    } else {
      throw new Error("Database Error");
    }
  } catch (error) {
    console.log(error);
  }
};

export default register