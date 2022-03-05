import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { registerUser, loginUser } from "@/store/features/authSlice";
import InputField from "@/components/layout/inputField";
import Button from "@/components/layout/button";
import { INPUTFIELD, BUTTONTEXT, FORMTITLE } from "@/enums/formElement";

export default function SignIn() {
  const [isSignIn, toggleIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSignIn
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ email, password }));
  };

  return (
    <SignInContainer className="signIn">
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
        <h1>{isSignIn ? FORMTITLE.SIGNIN : FORMTITLE.SIGNUP}</h1>
        <InputField
          name={INPUTFIELD.EMAIL}
          type={INPUTFIELD.EMAIL}
          value={email}
          label={INPUTFIELD.EMAIL}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name={INPUTFIELD.PASSWORD}
          type={INPUTFIELD.PASSWORD}
          value={password}
          label={INPUTFIELD.PASSWORD}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text={isSignIn ? BUTTONTEXT.SIGNIN : BUTTONTEXT.SIGNUP} />
        <GuidingTextToSignInOrUp>
          or 
          <span onClick={() => toggleIsSignIn(!isSignIn)}>
            {isSignIn ? BUTTONTEXT.SIGNIN : BUTTONTEXT.SIGNUP}
          </span>
        </GuidingTextToSignInOrUp>
      </FormContainer>
    </SignInContainer>
  );
}

const SignInContainer = styled.div``;

const FormContainer = styled.form``;

const GuidingTextToSignInOrUp = styled.div``;
