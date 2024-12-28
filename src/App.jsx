import React, { useState } from "react";
import Color from "./components/Color";
import Theme from "./components/Theme";
import Word from "./components/Word";
import UserColor from "./components/UserColor";
import UserDisplay from "./components/UserDisplay";
import UserInput from "./components/UserInput";
import UserAll from "./components/UserAll";

function App() {
  return (
    <div>
      <UserDisplay />
      <UserColor />
      <Color />
      <Theme />
      <Word />
      <UserInput />
      <UserAll />
    </div>
  );
}

export default App;
