import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const nameParam = params.get('name');

  useEffect(() => {
    if (nameParam) {
      // Handling query parameter with name
      console.log('Name:', nameParam);
    }
  }, [nameParam]);

  const handleLogin = () => {
    loginWithRedirect({ redirectUri: `${window.location.origin}/welcome` });
  };

  return (
    <div class="page-style ">
      <div class="inner-container">
    <Container className="border border-dark p-5 text-center">
      <h2>Login Page</h2>
      <Button variant="primary" onClick={handleLogin}>Login with Google</Button>
    </Container>
    </div>
    </div>
  );
};

export default LoginPage;
