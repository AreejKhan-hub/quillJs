import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Editor from "./Editor.js";

ReactDOM.render(
  <StrictMode>
    <Editor placeholder={"Write something..."} />
  </StrictMode>,
  document.getElementById("root")
);
