import React, { useState } from "react";
import JoinView from "../../Modules/Login/Join/JoinView";
import LoginView from "../../Modules/Login/Login/LoginView";

function Login() {
  const [IsJoin, setIsJoin] = useState(false);
  return <div>{IsJoin ? <JoinView /> : <LoginView />}</div>;
}

export default Login;
