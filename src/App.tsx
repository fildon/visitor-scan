import "./App.css";
import Cookies from "./components/cookies/Cookies";

const App = () => {
  const cookieString = document.cookie;
  return (
    <div className="App">
      <Cookies cookieString={cookieString} />
    </div>
  );
};

export default App;
