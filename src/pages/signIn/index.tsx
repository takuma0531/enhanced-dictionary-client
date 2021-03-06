import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { registerUser, loginUser } from "@/store/features/authSlice";
import InputField from "@/components/layout/inputField";
import Button from "@/components/layout/button";
import {
  InputFieldLabel,
  InputFieldLabelSpecification,
  InputFieldType,
  InputFieldName,
  ButtonText,
  FormTitle,
} from "@/enums/formElement";
import { Colors } from "@/enums/Style";

export default function SignIn() {
  const [isSignIn, toggleIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("sign in or sign up attempted");
    e.preventDefault();
    isSignIn
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ email, password }));
  };

  return (
    <SignInContainer className="signIn">
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
        <h1>{isSignIn ? FormTitle.SIGNIN : FormTitle.SIGNUP}</h1>
        <InputField
          name={InputFieldName.EMAIL}
          type={InputFieldType.EMAIL}
          value={email}
          label={InputFieldLabel.EMAIL}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name={InputFieldName.PASSWORD}
          type={InputFieldType.PASSWORD}
          value={password}
          label={InputFieldLabel.PASSWORD}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text={isSignIn ? ButtonText.SIGNIN : ButtonText.SIGNUP}
          borderRadius={"20px"}
          backgroundColor={Colors.LIGHT_BLUE}
          backgroundColorOnHover={Colors.DEEP_BLUE}
          fontSize={"16px"}
          fontWeight={"500"}
          color={Colors.WHITE}
        />
        <GuidingTextToSignInOrUp>
          or {""}
          <span onClick={() => toggleIsSignIn(!isSignIn)}>
            {isSignIn ? ButtonText.SIGNUP : ButtonText.SIGNIN}
          </span>
        </GuidingTextToSignInOrUp>
      </FormContainer>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${Colors.WHITE};
  width: 400px;
  border-radius: 10px;

  h1 {
    padding-top: 10px;
    color: ${Colors.LIGHT_BLUE};
    text-align: center;
  }
`;

const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;

  div {
    margin: 10px 0;
  }

  button {
    width: 100%;
    margin: 10px auto;
    padding: 8px 0;
  }
`;

const GuidingTextToSignInOrUp = styled.div`
  text-align: center;
  padding-bottom: 20px;

  span {
    cursor: pointer;
    color: ${Colors.LIGHT_BLUE};
    :hover {
      color: ${Colors.DEEP_BLUE};
    }
  }
`;
