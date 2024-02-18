import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/*" element={<BlogApp />} />
      <Route path="/users/*" element={<UserApp />} />
    </Routes>
  );
}
