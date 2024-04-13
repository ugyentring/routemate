import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("-----------");
    navigate("/");
  };
  return (
    <>
      <div className="component">contact</div>
      <button onClick={handleSubmit}>Back Home</button>
    </>
  );
};

export default Contact;
