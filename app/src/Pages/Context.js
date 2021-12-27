import React, { useContext } from "react";
import { StyleContext } from "./Login";

const Context = () => {
  const style = useContext(StyleContext);

  return (
    <div>
      <button
        id="button"
        style={{ backgroundColor: style.BackgroundColor, margin: "20px" }}
      >
        Hello Conetxt
      </button>
      {/* <h3>{style.BackgroundColor}</h3> */}
    </div>
  );
};

export default Context;
