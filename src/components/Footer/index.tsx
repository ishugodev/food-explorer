import { Container } from "./styles";

import LogoFooterPng from "../../assets/logo-footer.png";

export function Footer() {
  return (
    <Container>
      <img src={LogoFooterPng} alt="" />
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
