import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AuthLayout from "./shared/authLayout/AuthLayout";
import NotFound from "./shared/notFound/NotFound";
import ResetPass from "./pages/ResetPass/ResetPass";
import { Home } from "lucide-react";
import MasterLayout from "./shared/masterLayout/MasterLayout";
import Login from "./pages/Login/Login";
import Students from "./pages/Students/Students";
import AddStudent from "./pages/AddStudent/AddStudent";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/reset-password",
          element: <ResetPass />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "home",
          element: <Home />,
        },

        {
          path: "students",
          element: <Students />,
        },


        {
          path: "user-form",
          element: <AddStudent />,
        },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
