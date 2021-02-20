import React from "react";

const MyButton = ({ btnText }) => {
  const handleClick = () => {
    alert(`You clicked ${btnText}!`);
  };
  return (
    <>
      <button onClick={handleClick}>{btnText}</button>
    </>
  );
};
export default MyButton;
