const heading = React.createElement("h1", {"id": "heading"}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
const had = React.createElement("h2", {"id": "heading2"}, "heading")
root.render(had, heading);