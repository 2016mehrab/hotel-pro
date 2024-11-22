/* eslint-disable react/prop-types */
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
heigth:100vh;
display:flex;
background-color:var(--color-grey-50);
align-items:center;
justify-content:center;
`
const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useUser();

  useEffect(function() {
    if (!isAuthenticated && !isLoading) {
      navigate('/login')
    }
  }, [isAuthenticated, isLoading, navigate])

  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>

    )
  }
  if (isAuthenticated) {
    return (
      <>
        {children}
      </>
    );

  }

}

export default ProtectedRoutes
