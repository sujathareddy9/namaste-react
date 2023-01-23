import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import ResturantCard from "./components/ResturantCard";
import Constants from "./components/Constants";
// import { IMG_CDN_URL } from "./constants";
// import * as OBJ from "./components/Header";
// import { Title } from "./components/Header";

/**
 * Header
 *  -Logo
 *  -List Item
 * Body
 *  - Search Bar
 *  -Restraunt List
 *    -Restraunt Card
 *    -Image
 *     - Name
 *     -Rating
 *       -Cuisines
 * Footer
 */

const AppLayout = () => {
  return (
    <>
      {/* <OBJ.Header/> */}
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());