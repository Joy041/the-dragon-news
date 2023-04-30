import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import NewsLayout from "../Layout/NewsLayout/NewsLayout";
import News from "../Pages/News/News/News";
import Categories from "../Pages/Home/Categories/Categories";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import PrivateRoute from "../Route/PrivateRoute";
import Terms from "../Pages/Terms/Terms";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to = '/categories/0'></Navigate>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'about',
          element: <PrivateRoute><About></About></PrivateRoute>
        },
        {
          path: 'terms',
          element: <Terms></Terms>
        }
      ]
    },
    {
      path: "categories",
      element: <Main></Main>,
      children: [
        {
          path: ':id',
          element: <Categories></Categories>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News></News></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    }
  ]);

  export default router;