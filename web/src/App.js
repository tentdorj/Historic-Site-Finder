import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./homepage/Landing";
import NavBar from "./homepage/NavBar";
import Dash from "./dashboard/Dash";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header>
    //     <NavBar />
    //   </header>
    //   <main>
    //     <Landing />
    //     <Dash />
    //   </main>
    //   <footer>calgary hacks 2024</footer>
    // </div>
  );
}

export default App;
