import React, { Children } from "react";
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

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    // errorElement:<ErrorPage/>,
    children: [
      {
        path: "/About",
        element:<About />
      },
      {
        path: "/",
        element:<Body />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path: "/restaurant/:Id",
        element:<RestaurantMenu />
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);