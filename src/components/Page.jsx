import React from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import MyForm from "./MyForm";

const Page = ({ title, date }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{date}</p>
      <MyButton btnText="Click me!" />
      <MyButton btnText="Click me more!" />
      <MyButton btnText="Click me, please!" /> <br />
      <MyForm title="Form" />
    </>
  );
};

export default Page;
