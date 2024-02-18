import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./homepage/Landing";
import NavBar from "./homepage/NavBar";
import Login from "./loginSignUp/Login";
import Signup from "./loginSignUp/Signup";


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      {/* <Landing /> */}
    <Signup/>
    {/* <Login/> */}
    </div>
  );
}

export default App;
