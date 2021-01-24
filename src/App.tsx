import "./App.css";
import Cookies from "./components/Cookies";
import LocalStorage from "./components/LocalStorage";

const App = () => {
  const cookieString = document.cookie;
  return (
    <div className="App">
      <Cookies cookieString={cookieString} />
      <LocalStorage localStorage={localStorage} />
    </div>
  );
};

export default App;
