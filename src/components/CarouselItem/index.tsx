import { useNavigate } from "react-router-dom";

import {
  Container,
  DishImage,
  AdminContainer,
  NameWrapper,
  PriceWrapper,
  Favorite,
} from "./styles.ts";

import { Button } from "../Button/index";
import { AmountCount } from "../AmountCount/index";

import { useAuth } from "../../hook/auth.tsx";
import { USER_ROLE } from "../../utils/role.ts";

import HeartSvg from "../../assets/Heart.svg";
import PencilSvg from "../../assets/Pencil.svg";

interface CarouselItemProps {
  editUrl: string;
  url: string;
  img: string;
  name: string;
  price: number;
  amount: number;
}

export function CarouselItem(props: CarouselItemProps) {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(props.url);
  }

  function handleEdit() {
    navigate(props.editUrl);
  }

  switch (user!.role) {
    case USER_ROLE.ADMIN:
      return (
          <AdminContainer>
            <Favorite>
              <img src={PencilSvg} alt="" onClick={handleEdit} />
            </Favorite>

            <DishImage src={props.img} alt="" onClick={handleNavigate} />

            <NameWrapper onClick={handleNavigate}>
              <p>{props.name} &gt;</p>
            </NameWrapper>

            <PriceWrapper>
              <span>R$</span>
              <span>{props.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </PriceWrapper>
          </AdminContainer>
      );
    case USER_ROLE.CUSTOMER:
      return (
          <Container>
            <Favorite>
              <img src={HeartSvg} alt="" />
            </Favorite>

            <DishImage src={props.img} alt="" onClick={handleNavigate} />

            <NameWrapper onClick={handleNavigate}>
              <p>{props.name} &gt;</p>
            </NameWrapper>

            <PriceWrapper>
              <span>R$</span>
              <span>{props.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
            </PriceWrapper>

            <AmountCount amount={props.amount} />
            <Button className="add">incluir</Button>
          </Container>
      );
  }
}
