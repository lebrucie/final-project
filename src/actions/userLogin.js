import axios from "axios";

const login = async (email, password) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `http://localhost:5000/api/users/login`,
      { email, password },
      config
    );
    const data = await res;
    console.log(data);
    return data;
  } catch (error) {
    return {
      error:
        error.response && error.response.data
          ? error.response.data
          : error.message,
    };
  }
};

export default login;
