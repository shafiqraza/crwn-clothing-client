import React, { useState }  from "react";

import { SignInContainer, SignInTitle, ButtonContainer, GoToMsg } from "./signin.styles";

import { connect } from "react-redux";

import FormInput from "../FormInput/form-input.component";
import CustomButton from "../custome-button/custome-button.component";


import { emailSignInStart, googleSignInStart } from "../../redux/user/user-action";

const SignIn = ({ emailSignIn, signInWithGoogle, goToSignUp }) => {
  const [userCredientails, setUserCrendientials] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUserCrendientials({...userCredientails, [e.target.name]: e.target.value});
  }
  
  const {email, password} = userCredientails;

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignIn(email, password);
  }

  
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Signin with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput 
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <ButtonContainer>
          <CustomButton type="submit">Signin</CustomButton>
          <CustomButton
            type="button"
            handleClick={signInWithGoogle} 
            isGoogleBtn
          >Signin with Google</CustomButton>
        </ButtonContainer>
      </form>
      <GoToMsg>Don't have account? <span onClick={goToSignUp}>create one!</span></GoToMsg>
    </SignInContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  emailSignIn: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default React.memo(connect(null, mapDispatchToProps)(SignIn));