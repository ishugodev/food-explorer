import PolygonSvg from "../../assets/Polygon.svg";

import { Container } from "./styles.ts";

type LogoProps = React.ComponentPropsWithoutRef<"div">;

export function Logo(props: LogoProps) {
  return (
    <Container {...props}>
      <img src={PolygonSvg} alt="" />
      <span>food explorer</span>
    </Container>
  );
}
