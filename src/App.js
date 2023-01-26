import React, { Children, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantCard from "./components/RestaurantCard";
import Constants from "./components/Constants";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ChildClass from "./components/ChildClass";
import Instamart from "./components/Instamart";
import Shimmer from "./components/Shimmer";






const AppLayout = () => {
  return (
    <>
    //JSX should have only one parent. and if you dont want to use extra div you should use react.fragment. Its empty tag <></>
    <React.Fragment>
      <Header />
      {/* <About /> */}
      {/* <Body /> */}
      <Outlet/>
      <Footer />
    </React.Fragment>
    </>
  );
};
const About = React.lazy(() => import('./component/About'))
const Instamart = lazy(() => import("./components/pages/Instamart"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path: "/about",
        element:<About />,
        children: [
          {
          path: "profile",  // parentpath/{path}=>local host: 1244/about/profile.
          element: <Profile />,
        },
      ],
      },
      {
        path: "/",
        element:<Body />,
      },
      {
        path: "/contact",
        element:<Contact />,
      },
      {
        path: "/restaurant/:Id",
        element:<RestaurantMenu />,
      },
      {
        path: "/instamart",
        element:<Suspense><Instamart />,
        </Suspense>
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);