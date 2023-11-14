import Logo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={Logo} alt="logo" style={{ width: "50px" }} />
      <h1 style={{ marginTop: 0 }}>REACT QUIZ</h1>
    </div>
  );
};

export default Header;
