import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Milo" animal="Dog" breed="street" />
      <Pet name="Laika" animal="Dog" breed="street" />
      <Pet name="Duke" animal="Dog" breed="street" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
