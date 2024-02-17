import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./homepage/Landing";
import NavBar from "./homepage/NavBar";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Landing />
    </div>
  );
}

export default App;
