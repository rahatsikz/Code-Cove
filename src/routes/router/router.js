import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => {
          return fetch("http://localhost:5000/courses");
        },
      },
      {
        path: "/details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/details/${params.id}`);
        },
      },
      {
        path: "Faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
