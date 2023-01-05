// *** HMR - Hot Module Reloading
// ** File watchers algorithm - C++
// BUNDLING
// MINIFY
// Cleaning our Code
// Dev and Production Build
// Super Fast build alagrithm
// Image Optimaization
// Caching while development
// Compression
// Parcel also Compatable with older version of 
// HTTPS on dev
// Port number
// Consistent Hashing Alagarithm
// Parcel is Zero Config
// Tree Shaking - Removing un-wanted

import React from "react";
import ReactDOM from "react-dom/client";

// Create root
// const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

// Create a new h1 element
// const reactHeader = React.createElement(
//   "h1",
//   { id: "header", key: 0 },
//   "Hello from React parcel"
// );
// React.createElement => gives object => HTML(DOM)
// console.log(reactHeader);
// Create a new h2 element
// const reactHeader2 = React.createElement(
//   "h2",
//   { id: "header2", key: 1 },
//   "Hello from React"
// );
// jsx ??
// React Componenets
// - Functional - NEW - i will use this  most of the time.
// Name of component starts with capatial letter.-(it's not mandatory, but good practice that)

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
var xyz = 10;
const HeaderComponent = () => {
  return ( 
  <div>
    <Title /> 
    {/* this is knows as composing component */}
    {console.log("Any JS Code")}
    <h1>Namaste React functional component</h1>
  <h2>This is a h2 tage</h2>
  </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />)
//- Class Based Component(OLD)- we will learn this too


// Create a div container with h1 and h2
// const reactDiv = React.createElement("div", { id: "container" }, [
//   reactHeader,
//   reactHeader2,
// ]);
// passing a react element inside the root
// async difer
// Render the container
// reactRoot.render(reactDiv)

