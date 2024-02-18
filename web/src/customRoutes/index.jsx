import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import Landing from "../homepage/Landing";
import Dash from "../dashboard/Dash";
import Login from "../loginSignUp/Login";

const Routes = () => {
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "dash",
          element: <Dash />,
        },
      ],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,

    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
