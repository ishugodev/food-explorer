import { CarouselWrapper, Container, Hero, MobileHeroImg, DesktopHeroImg } from "./styles";

import { Header } from "../../components/Header";
import { Carousel } from "../../components/Carousel";
import { CarouselItem } from "../../components/CarouselItem";

import DesktopHeroPng from "../../assets/pngegg 1.png";
import MobileHeroPng from "../../assets/pngegg 2.png";
import Dish from "../../assets/Dish.png";
import { Footer } from "../../components/Footer";
import { MenuComponent } from "../../components/MenuComponent";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";

import { SwiperSlide } from "swiper/react";

interface Dish {
  id: number;
  name: string;
  category: string;
  price: number;
  amount: number;
  image: string;
}

const categories = [
  { name: "teste", label: "teste" },
  { name: "refeicoes", label: "Refeições" },
  { name: "prato-principal", label: "Prato principal" },
  { name: "sobremesas", label: "Sobremesas" },
  { name: "bebidas", label: "Bebidas" },
] as const;

export function Home() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [filters, setFilters] = useState<{
    name: string;
    ingredients: string;
  }>({
    name: "",
    ingredients: "",
  });

  const { signOut } = useAuth();

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }

  useEffect(() => {
    async function fetchDishes() {
      try {
        const response = await api.get(`/dishes?name=${filters.name}&ingredients=${filters.ingredients}`);
        const formattedDishes = response.data.map((dish: Dish) => ({
          ...dish,
          image: dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : Dish,
        }));

        setDishes(formattedDishes);
      } catch (error) {
        console.error("Erro ao buscar pratos:", error);
      }
    }

    fetchDishes();
  }, [filters]);

  return (
    <Container
      $menuVisible={menuVisible}
      className={menuVisible ? "menuVisible" : ""}
    >
      {menuVisible && <MenuComponent search={filters.name} onSearchChange={(search) => setFilters(prev => ({ ...prev, name: search }))} onMenuClick={handleMenuClick} />}
      <Header search={filters.name} onSearchChange={(search) => setFilters(prev => ({ ...prev, name: search }))} onMenuClick={handleMenuClick} onSignOutClick={signOut} />

      <main>
        <Hero>
          <MobileHeroImg src={MobileHeroPng} alt="" />
          <DesktopHeroImg src={DesktopHeroPng} alt="" />

          <div className="text">
            <p>Sabores inigualáveis</p>
            <span>
              Sinta o cuidado do preparo com ingredientes selecionados.
            </span>
          </div>
        </Hero>

        {categories.map((category) => (
          <CarouselWrapper key={category.name}>
            <strong>{category.label}</strong>
            <Carousel>
              {dishes
                .filter((dish) => dish.category === category.name)
                .map((dish) => (
                  <SwiperSlide key={dish.id}>
                    <CarouselItem
                      key={dish.id}
                      editUrl={`/editdish/${dish.id}`}
                      url={`/dish/${dish.id}`}
                      img={dish.image}
                      name={dish.name}
                      price={dish.price}
                      amount={dish.amount}
                    />
                  </SwiperSlide>
                ))}
            </Carousel>
          </CarouselWrapper>
        ))}
      </main>

      <Footer />
    </Container>
  );
}
