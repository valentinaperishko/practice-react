import React from "react";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

const MyForm = ({ title }) => {
  return (
    <form>
      <h2>{title}</h2>
      <MyInput title="Name" placeholder="Enter your name..." />
      <br />
      <MyInput title="Password" placeholder="Enter your password..." />
      <br />
      <input type="range" min="18" max="80" />
      <br />
      <MyButton btnText="Submit" />
    </form>
  );
};

export default MyForm;
