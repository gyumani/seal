import React, { useState } from "react";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";

function App() {
  const [mainFlag, setMainFlag] = useState(false);

  const setLogin = (prop: boolean) => {
    setMainFlag(prop);
  };

  return (
    <div className="main_container">
      <Main />
    </div>
  );
}

export default App;
