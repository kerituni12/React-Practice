import React from "react";
import "./styles.css";

import ClassComponet from "./ClassComponentV3";
import { InlineFunction } from "./Performe/InlineFunction";

export default function App() {
  return (
    <div className="App">
      {/* <ClassComponet color="red" /> */}
      <InlineFunction />
    </div>
  );
}
