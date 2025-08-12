import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import AuthLayout from "./shared/authLayout/AuthLayout";
import NotFound from "./shared/notFound/NotFound";
import ResetPass from "./pages/ResetPass/ResetPass";
import MasterLayout from "./shared/masterLayout/MasterLayout";
import Login from "./pages/Login/Login";
import StudentsPage from "./pages/StudentsPage/StudentsPage";
import AddStudentForm from "./pages/AddStudentForm/AddStudentForm";
import { StudentsProvider } from "./context/StudentsContext";
import Home from "./pages/Home/Home";
import { Users } from "./pages/Users/Users";

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
          element: <StudentsPage />,
        },
        {
          path: "user-form",
          element: <AddStudentForm />,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ]);
  return (
    <>
      <StudentsProvider>
        <RouterProvider router={routes} />
      </StudentsProvider>
    </>
  );
}

export default App;
