import { useState } from "react";
import Input from "../Input/Input";
import AuthButton from "../AuthButton/AuthButton";
import SeparateBar from "../SeparateBar/SeparateBar";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/api-login/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.text();
    console.log(data);

    setEmail("");
    setPassword("");
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="buttons-container">
        <AuthButton provider="Google" />
        <AuthButton provider="Apple" />
      </div>

      <SeparateBar />

      <div className="inputs-container">
        <Input
          id="Inp-email"
          label="Email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          id="Inp-password"
          label="Senha"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="submit-container">
        <SubmitButton/>
      </div>

    </form>
  );
}

export default LoginForm;
