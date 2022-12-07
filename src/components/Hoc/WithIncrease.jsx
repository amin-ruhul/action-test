import { useState } from "react";

function WithIncrease(OriginalComponent, customNumber = 1) {
  const NewComponent = (props) => {
    const [increase, setIncrease] = useState(10);
    const handelIncrease = () => {
      setIncrease((prevInc) => prevInc + customNumber);
    };
    return (
      <OriginalComponent
        fontSize={increase}
        handelIncrease={handelIncrease}
        {...props}
      />
    );
  };
  return NewComponent;
}

export default WithIncrease;
