import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/aboutus");
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={handleClick}>Learn more about bootcamp!</button>
    </>
  );
};

export default Home;

