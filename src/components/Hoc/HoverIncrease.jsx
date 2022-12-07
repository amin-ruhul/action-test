import WithIncrease from "./WithIncrease";

function HoverIncrease({ fontSize, handelIncrease }) {
  return (
    <div>
      <h1 style={{ fontSize: fontSize }}>My Font size is {fontSize}</h1>
      <button onMouseEnter={handelIncrease}>Hover to Increase Font Size</button>
    </div>
  );
}

export default WithIncrease(HoverIncrease);
