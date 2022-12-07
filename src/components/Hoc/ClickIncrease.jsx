import WithIncrease from "./WithIncrease";

function ClickIncrease({ fontSize, handelIncrease, secretWord }) {
  console.log("Value of secretWord: " + secretWord);

  return (
    <div>
      <h1 style={{ fontSize: fontSize }}>My Font size is {fontSize}</h1>
      <button onClick={handelIncrease}>Click to Increase Font Size</button>
    </div>
  );
}

export default WithIncrease(ClickIncrease, 5);
