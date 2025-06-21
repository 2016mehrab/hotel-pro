import { useState } from "react";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical.jsx";
import SpinnerMini from "../../ui/SpinnerMini.jsx"

import { useLogin } from "./useLogin.js";
import Row from "../../ui/Row";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const sample={
    email:"elizabethdiana8@punkproof.com",
    password:"m^6*tEfJu^U",
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    login({ email, password }, {
      onSettled: () => {
        setEmail("");
        setPassword("");
      }
    });
  }


  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

          disabled={isLoading}
        />
      </FormRowVertical>
      <Row>
        <h3>Try the app with:</h3>
        <p>email: {sample.email}</p>
        <p>password: {sample.password}</p>
      </Row>
      <FormRowVertical>
        <Button
          disabled={isLoading}
          size="large">
          {!isLoading ? 'Login' : <SpinnerMini />}

        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
