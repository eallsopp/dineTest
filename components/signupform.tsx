"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const SignUpForm = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, firstName: e.target.value });
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, lastName: e.target.value });
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, email: e.target.value });
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, password: e.target.value });
  };

  const handleRepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, repassword: e.target.value });
  };

  const checkPasswordValues = () => {
    if (input.password !== input.repassword) {
      return false;
    }

    return true;
  };

  const resetInputs = () => {
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repassword: "",
    });
  };

  const submitToDB = () => {
    checkPasswordValues()
      ? console.log(`data sent to db`)
      : alert("passwords do not match");
  };

  return (
    <>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          isRequired
          label="firstName"
          placeholder="Enter your first name"
          type="firstName"
          value={input.firstName}
          onChange={handleFirstName}
        />
        <Input
          isRequired
          label="lastName"
          placeholder="Enter your last name"
          type="lastName"
          value={input.lastName}
          onChange={handleLastName}
        />
        <Input
          isRequired
          label="email"
          placeholder="Enter your email"
          type="email"
          value={input.email}
          onChange={handleEmail}
        />
        <Input
          isRequired
          label="password"
          placeholder="Enter your desired password"
          type="password"
          value={input.password}
          onChange={handlePassword}
        />
        <Input
          isRequired
          label="Password Confirm"
          placeholder="Please renter your password to confirm"
          type="password"
          value={input.repassword}
          onChange={handleRepassword}
        />
      </div>
      <Button
        color="danger"
        onClick={() => {
          resetInputs();
        }}
      >
        Cancel
      </Button>
      <Button color="primary" onClick={submitToDB}>
        Sign Up
      </Button>
    </>
  );
};

export default SignUpForm;
