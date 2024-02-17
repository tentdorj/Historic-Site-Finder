import NavBar from "./homepage/NavBar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <header>
        <h1>My Super Cool App</h1>
        <NavBar />
      </header>
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        <Outlet />
      </main>
      <footer>©️ me 2023</footer>
    </>
  );
}
