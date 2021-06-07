
import React, {useState} from "react";

import { SigninAndSignupContainer } from "./signin-and-signup-page.styles";
import SignIn from "../../components/sign-in/Signin.component";
import SignUp from "../../components/sign-up/sign-up.component";
const SigninAndSignup = () => {
  const [ selectedTab, setTab ] = useState("signin");

  return (
    <SigninAndSignupContainer>

      {
        selectedTab === "signin" ?  
          <SignIn goToSignUp={() => setTab("signup")}/>
        
        : <SignUp goToSignIn={() => setTab("signin")}/>
      }
    </SigninAndSignupContainer >
  );
};

export default React.memo(SigninAndSignup);