import React from "react";
import { render } from "react-dom";

import { Hello } from "./components/Hello";

function Application() {
  return (
    <div>
      <Hello />
    </div>
  );
}

render(<Application />, document.getElementById("root"));
