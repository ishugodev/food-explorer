import { Container } from "./styles.ts";
import CaretLeftSvg from "../../assets/CaretLeft.svg";
import { useNavigate } from "react-router-dom";

export function GoBack() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(-1);
  }

  return (
    <Container onClick={handleNavigate}>
      <img src={CaretLeftSvg} alt="" />
      <span>voltar</span>
    </Container>
  );
}
