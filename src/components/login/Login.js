import React, { useState } from "react";
import "./Login.css";
import LoginPage from "./LoginPage";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";

function Login() {
  const [page, setPage] = useState(1);

  const next=(pg)=>{
    setPage(pg)
  }

  const renderPage = pgNumber => {
    switch (pgNumber) {
      case 1:
        return <LoginPage next={next} />;
      case 2:
        return <ForgotPassword next={next}  />;
      case 3:
        return <SignUp next={next} />;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="login-form">
        {renderPage(page)}</div>
    </div>
  );
}

export default Login;
