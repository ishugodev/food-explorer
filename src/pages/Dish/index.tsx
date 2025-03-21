import {
  Container,
  GoBackWrapper,
  Content,
  TagWrapper,
  PurchaseWrapper,
  DishImageWrapper,
  AdminButton,
} from "./styles";

import { Header } from "../../components/Header";
import { GoBack } from "../../components/GoBack";
import { AmountCount } from "../../components/AmountCount";
import { Button } from "../../components/Button";

import { Tag } from "../../components/Tag";
import { Footer } from "../../components/Footer";
import { USER_ROLE } from "../../utils/role";
import { MenuComponent } from "../../components/MenuComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";

import ReceiptSvg from "../../assets/Receipt.svg";

interface Dish {
  id: number;
  name: string;
  category: string;
  ingredients: { id: number; name: string }[];
  price: number;
  amount: number;
  description: string;
  image: string;
}

export function Dish() {
  const { id } = useParams();
  const { user, signOut } = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);
  const [dish, setDish] = useState<Dish | null>(null);

  const navigate = useNavigate();

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }

  function handleEditNewDish() {
    navigate(`/editdish/${id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        const formattedDish = {
          ...response.data,
          image: response.data.image ? `${api.defaults.baseURL}/files/${response.data.image}` : Dish,
        };
        setDish(formattedDish);
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }
    }

    if (id) {
      fetchDish();
    }
  }, [id]);

  return (
    <Container
      $menuVisible={menuVisible}
      className={menuVisible ? "menuVisible" : ""}
    >
      {menuVisible && <MenuComponent onMenuClick={handleMenuClick} />}
      <Header onMenuClick={handleMenuClick} onSignOutClick={signOut} />

      <GoBackWrapper>
        <GoBack />
      </GoBackWrapper>

      <main>

        <DishImageWrapper>
          <img src={dish?.image} alt="" />
        </DishImageWrapper>

        <Content>
          <h1>{dish?.name}</h1>
          <p>
            {dish?.description}
          </p>

          <TagWrapper>
            {dish?.ingredients?.map((ingredient) => (
              <Tag key={ingredient.id}>{ingredient.name}</Tag>
            ))}
          </TagWrapper>

          <PurchaseWrapper>
            {[USER_ROLE.CUSTOMER].includes(user!.role) && (
              <>
                <AmountCount amount={1} />
                <Button>
                  <img src={ReceiptSvg} alt="" />
                  <p>pedir</p>
                  <span>R$ {dish?.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                </Button>
              </>
            )}
          </PurchaseWrapper>
          {[USER_ROLE.ADMIN].includes(user!.role) && (
            <AdminButton onClick={handleEditNewDish}>Editar prato</AdminButton>
          )}

        </Content>
      </main>

      <Footer />
    </Container>
  );
}
