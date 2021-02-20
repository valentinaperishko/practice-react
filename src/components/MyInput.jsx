const MyInput = ({ title, placeholder }) => {
  return (
    <>
      <span>
        {title}: <br />
      </span>
      <input placeholder={placeholder}></input>
    </>
  );
};

export default MyInput;
