import { useEffect } from "react";

const Message = ({ msg, show, setMsg }) => {
  console.log(msg);
  useEffect(() => {
    setTimeout(() => {
      setMsg(null);
      console.log(msg);
    }, 3000);
  }, []);

  return <div className="msg_banner">{msg}</div>;
};

export default Message;
