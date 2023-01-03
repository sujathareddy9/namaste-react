// Create root
const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

// Create a new h1 element
const reactHeader = React.createElement(
  "h1",
  { id: "header", key: 0 },
  "Hello from React"
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
