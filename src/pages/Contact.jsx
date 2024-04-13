import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("-----------");
    navigate("/");
  };
  return (
    <main>
      <div className="component">contact</div>
      <button onClick={handleSubmit}>Back Home</button>
    </main>
  );
};

export default Contact;
