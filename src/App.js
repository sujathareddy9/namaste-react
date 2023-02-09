import React, { lazy, Suspense, useState, useContext } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const InstaMart = lazy(() => import("./components/InstaMart"));
//Upon On Demand Loading -> Upon Render -> Suspend Loading.
const AppLayout = () => {
  const [user, setUser]= useState({
    name: "suji",
    email: "sujakria@gmail.com",
  });
  return (
    
    <Provider store ={store}>
      <UserContext.Provider value={{
        user: {
          name: "Dummy",
          email: "dummy@gmail.com",
      },
        }}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about", // ParentPath/(path) ==> localhost:1234/about/profile
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />, // ParentPath/(path) ==> localhost:1234/about/profile
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

//Chunking
//Code Splitting
//Dynamic Imports
//lazy loading
//On demand load
//Dynamic Bundling

// const AppLayout = () => {
//   const [user, setUser] = useState({
//     name: "Namaste React",
//     email: "sujakria@gmail.com",
//   });
//   return (
//     <>
//     //JSX should have only one parent. and if you dont want to use extra div you should use react.fragment. Its empty tag <></>
//     <React.Fragment>
//       <Header />
//       <About />
//       <Body />
//       <Outlet/>
//       <Footer />
//     </React.Fragment>
//     </>
//   );
// };
// const About = React.lazy(() => import('./component/About'));
// const Instamart = lazy(() => import("./components/pages/Instamart"));

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout/>,
//     errorElement: <Error />,
//     // errorElement:<ErrorPage/>,
//     children: [
//       {
//         path: "/about",
//         element:<About />,
//         children: [
//           {
//           path: "profile",  // parentpath/{path}=>local host: 1244/about/profile.
//           element: <Profile />,
//         },
//       ],
//       },
//       {
//         path: "/",
//         element:<Body  />,
//       },
//       {
//         path: "/contact",
//         element:<Contact />,
//       },
//       {
//         path: "/restaurant/:Id",
//         element:<RestaurantMenu />,
//       },
//       {
//         path: "/instamart",
//         element:<Suspense><Instamart />,
//         </Suspense>
//       },
//     ],
//   },
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

//**AppLayout
    // (state=user)
        // Body- user={user} />
            // Restaurantcontainer =>
              // restaurantCard user={user}
                 // <h4>{user}</h4>( this is known as props drilling)







 

 