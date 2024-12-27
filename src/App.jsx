import React from "react";
import Color from "./components/Color";
import Theme from "./components/Theme";
import Word from "./components/Word";

function App() {
  return (
    <div>
      <Color />
      <Theme />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-6">tugmani bosing</h1>
        <Word />
      </div>
    </div>
  );
}

export default App;
