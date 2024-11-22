import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo"
import Heading from "../ui/Heading"

const LoginLayout = styled.main`
min-height: 100dvh;
display: grid;
align-content: center;
justify-content: center;
background-color: var(--color-grey-50);
`;
const LoginHeading = styled(Heading)`
text-align:center;
padding-block: 1em;

`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <LoginHeading as='h1'>Log in to your account </LoginHeading >
      <LoginForm />
    </LoginLayout>

  )
}

export default Login;
