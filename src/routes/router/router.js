import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
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
      },
      {
        path: "Faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
