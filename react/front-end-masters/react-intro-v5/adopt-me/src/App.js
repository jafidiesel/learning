import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-id" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "milo", animal: "dog", breed: "street" }),
    React.createElement(Pet, { name: "laika", animal: "dog", breed: "street" }),
    React.createElement(Pet, { name: "fiona", animal: "cat", breed: "street" })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
