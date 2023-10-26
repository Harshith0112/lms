import React from "react";
import {} from "../components/Styles";

import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
  HeadDescription,
} from "../components/Styles";

const Signup = () => {
  // const Signup = () => {
  //     const handleSignup = (e) => {
  //       e.preventDefault();
  //       // Perform Signup logic here
  //     };

  return (
    <div>
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Signup</HeadTitle>
          {/* <form onSubmit={handleSignup}> */}

          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                id="name"
                name="name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="pw"
                name="pw"
              />
            </FormGroup>

            <Button
              style={{ marginLeft: "110px", marginTop: "50px" }}
              type="submit"
            >
              Signup
            </Button>
            <HeadDescription style={{ marginLeft: "20px" }}>
              Already an User? <a href="/">Login!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
     
      </PageContainer>
    </div>
  );
};

export default Signup;
