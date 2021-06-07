import React, { useState } from "react";

import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user-action";

import FormInput from "../FormInput/form-input.component";
import CustomButton from "../custome-button/custome-button.component";

import { SignUpContainer, SignUpTitle, GoToMsg } from "./sign-up.styles";

const  SignUp = ({ signUpStart, goToSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(goToSignIn);

  const handleChange = (e) => {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont matched");
      setUserCredentials({
        ...userCredentials,
        password: "",
        confirmPassword: "",
      });
      return;
    }

    signUpStart(displayName, email, password);
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Signup with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
      <GoToMsg>Already have an account? <span onClick={goToSignIn}>Sign in!</span></GoToMsg>

    </SignUpContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default React.memo(connect(null, mapDispatchToProps)(SignUp));
