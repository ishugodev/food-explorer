import { useEffect, useState } from "react";

import {
  Container,
  LineWrapper,
  InputWrapper,
  TagWrapper,
  DishImage
} from "./styles";

import { Header } from "../../components/Header";
import { MenuComponent } from "../../components/MenuComponent";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { GoBack } from "../../components/GoBack";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import UploadSvg from "../../assets/Upload.svg";
import { useAuth } from "../../hook/auth";

interface Ingredient {
  id: number;
  name: string;
}

interface Dish {
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: Ingredient[];
  image: File | null;
}

export function NewDish() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [dish, setDish] = useState<Dish>({
    name: "",
    category: "refeicoes",
    price: 0,
    description: "",
    ingredients: [],
    image: null,
  });
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const { signOut } = useAuth();

  const navigate = useNavigate();

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setDish((prevState) => ({ ...prevState, image: file }));
    const imagePreview = URL.createObjectURL(file);
    setImageUrl(imagePreview);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setDish((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleAddTag(tagName: string) {
    setDish((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { id: prevState.ingredients.length + 1, name: tagName }],
    }));
  }

  function handleDeleteTag(tagId: number) {
    setDish((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter((ingredient) => ingredient.id !== tagId),
    }));
  }

  useEffect(() => {
    const isImageSelected = !!dish.image;
    const isNameFilled = !!dish.name;
    const isCategorySelected = !!dish.category;
    const isPriceFilled = dish.price > 0;
    const isDescriptionFilled = !!dish.description;
    const isIngredientsFilled = dish.ingredients.length > 0;
  
    setButtonDisabled(
      !isImageSelected ||
      !isNameFilled ||
      !isCategorySelected ||
      !isPriceFilled ||
      !isDescriptionFilled ||
      !isIngredientsFilled
    );
  }, [dish]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name", dish.name);
    formData.append("category", dish.category);
    formData.append("price", dish.price.toString());
    formData.append("description", dish.description);
    formData.append("ingredients", dish.ingredients.map((ingredient) => ingredient.name).join(","));
    if (dish.image) {
      formData.append("image", dish.image);
    }
    
    api.post("/dishes", formData)
      .then(() => {
        navigate("/");
        alert("Prato criado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao criar prato:", error);
        alert("Erro ao criar prato.");
      });
  }

  return (
    <Container $menuVisible={menuVisible} className={menuVisible ? "menuVisible" : ""}>
      {menuVisible && <MenuComponent onMenuClick={handleMenuClick} />}
      <Header onMenuClick={handleMenuClick} onSignOutClick={signOut} />

      <main>
        <GoBack />
        <h1>Novo prato</h1>
        <form onSubmit={handleSubmit}>
          {imageUrl ? <DishImage src={imageUrl} alt="Prato" /> : <p>Sem imagem selecionada</p>}

          <LineWrapper>
            <InputWrapper className="image">
              <span>Imagem do prato</span>
              <label htmlFor="image">
                <input id="image" type="file" style={{ display: "none" }} onChange={handleFileChange} />

                <div><img src={UploadSvg} alt="" /> Selecione imagem</div>
              </label>
            </InputWrapper>

            <InputWrapper className="name">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" value={dish.name} onChange={handleChange} />
            </InputWrapper>

            <InputWrapper className="category">
              <label htmlFor="category">Categoria</label>
              <select id="category" name="category" value={dish.category} onChange={handleChange}>
                <option value="refeicoes">Refeição</option>
                <option value="prato-principal">Prato principal</option>
                <option value="sobremesas">Sobremesa</option>
              </select>
            </InputWrapper>
          </LineWrapper>

          <LineWrapper>
            <InputWrapper className="ingredients">
              <label htmlFor="ingredients">Ingredientes</label>
              <TagWrapper>
                {dish.ingredients.map((ingredient) => (
                  <Tag key={ingredient.id} variant="deletable" onDelete={() => handleDeleteTag(ingredient.id)}>{ingredient.name}</Tag>
                ))}
                <Tag variant="add" onAdd={handleAddTag}>Adicionar</Tag>
              </TagWrapper>
            </InputWrapper>

            <InputWrapper className="price">
              <label htmlFor="price">Preço</label>
              <input type="number" id="price" name="price" value={dish.price} onChange={handleChange} />
            </InputWrapper>
          </LineWrapper>

          <InputWrapper className="description">
            <label htmlFor="description">Descrição</label>
            <textarea id="description" name="description" value={dish.description} onChange={handleChange} placeholder="A Salada César é uma opção refrescante para o verão." />
          </InputWrapper>

          <Button type="submit" disabled={buttonDisabled}>Salvar prato</Button>
        </form>
      </main>
      <Footer />
    </Container>
  );
}