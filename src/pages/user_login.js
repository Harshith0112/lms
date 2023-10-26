import React, { useState } from "react";
import { HeadDescription } from "../components/Styles";
import {  useNavigate } from "react-router-dom"; // Import useNavigate
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from "../components/Styles";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'harshith@email.com' && password === '123') {
      console.log('Login successful');
      // Use navigate to go to the "/home" route
      navigate('/home');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div>
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Login</HeadTitle>
          <form style={{ marginTop: "50px", marginLeft: "550px" }} onSubmit={handleLogin}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="name"
                name="name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="pw"
                name="pw"
              />
            </FormGroup>

            <Button
              style={{ marginLeft: "110px", marginTop: "50px" }}
              type="submit"
              onClick={() => navigate('home')} // You can remove onClick from the button
            >
              Login
            </Button>
            <HeadDescription style={{ marginLeft: "30px" }}>
              New User? <a href="/signup">Signup!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Login;
