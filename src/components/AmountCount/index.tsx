import { Container } from "./styles.ts";

import MinusSvg from "../../assets/Minus.svg";
import PlusSvg from "../../assets/Plus.svg";
import { useState } from "react";

interface AmountCountProps {
  amount?: number;
}

export function AmountCount(props: AmountCountProps) {
  const [count, setCount] = useState(props.amount || 1);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }

  function handleMinus() {
    if (count <= 1) return;
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <Container>
      <img src={MinusSvg} alt="" onClick={handleMinus} />
      <span>{count}</span>
      <img src={PlusSvg} alt="" onClick={handlePlus} />
    </Container>
  );
}
