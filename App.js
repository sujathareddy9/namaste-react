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

import React from "react";
import ReactDOM from "react-dom/client";
// Create root
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

// Create a new h1 element
const reactHeader = React.createElement(
  "h1",
  { id: "header", key: 0 },
  "Hello from React parcel"
);

// Create a new h2 element
const reactHeader2 = React.createElement(
  "h2",
  { id: "header2", key: 1 },
  "Hello from React"
);

// Create a div container with h1 and h2
const reactDiv = React.createElement("div", { id: "container" }, [
  reactHeader,
  reactHeader2,
]);

// Render the container
reactRoot.render(reactDiv)
