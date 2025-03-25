import { useEffect, useState } from "react";

import {
  Container,
  DishImage,
  LineWrapper,
  InputWrapper,
  TagWrapper,
  ButtonWrapper,
  DeleteButton,
} from "./styles";

import { Header } from "../../components/Header";
import { MenuComponent } from "../../components/MenuComponent";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { GoBack } from "../../components/GoBack";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hook/auth";

import UploadSvg from "../../assets/Upload.svg";

interface Dish {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  ingredients: { id: number; name: string }[];
  image: string | null;
}

export function EditDish() {
  const { id } = useParams();

  const { signOut } = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [dish, setDish] = useState<Dish | null>(null);

  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const navigate = useNavigate();

  function handleMenuClick() {
    setMenuVisible(!menuVisible);
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    const imagePreview = URL.createObjectURL(file);
    setImageUrl(imagePreview);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setDish((prevState) => (prevState ? { ...prevState, [name]: value } : null));
  }

  function handleDeleteTag(tagId: number) {
    setDish((prevState) =>
      prevState
        ? {
            ...prevState,
            ingredients: prevState.ingredients.filter((ingredient) => ingredient.id !== tagId),
          }
        : null
    );
  }

  function handleAddTag(tagName: string) {
    setDish((prevState) =>
      prevState
        ? {
            ...prevState,
            ingredients: [
              ...prevState.ingredients,
              {
                id: prevState.ingredients.length + 1,
                name: tagName,
              },
            ],
          }
        : null
    );
  }

  function handleSubmit() {

    if (!dish) return;

    const formData = new FormData();
    formData.append("name", dish.name);
    formData.append("category", dish.category);
    
    const ingredientsString = dish.ingredients.map((ingredient) => ingredient.name).join(",");
    formData.append("ingredients", ingredientsString);

    formData.append("price", dish.price.toString());
    formData.append("description", dish.description);

    if (image) {
      formData.append("image", image);
    } else if (dish.image) {
      formData.append("image", dish.image);
    }

    api
      .put(`/dishes/${id}`, formData)
      .then(() => {
        navigate("/");
        alert("Prato atualizado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao atualizar prato:", error);
        alert("Erro ao atualizar prato.");
      });
  }

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${id}`);
        setDish(response.data);
      } catch (error) {
        console.error("Erro ao buscar prato:", error);
      }
    }

    if (id) {
      fetchDish();
    }
  }, [id]);

  useEffect(() => {
    if (dish) {
      setImageUrl(dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : null);

      const isFormValid =
        dish.name.trim() !== "" &&
        dish.category.trim() !== "" &&
        dish.price > 0 &&
        dish.description.trim() !== "" &&
        dish.ingredients.length > 0 &&
        dish.image !== null;

      setButtonDisabled(!isFormValid);
    }
  }, [dish]);

  return (
    <Container
      $menuVisible={menuVisible}
      className={menuVisible ? "menuVisible" : ""}
    >
      {menuVisible && <MenuComponent onMenuClick={handleMenuClick} />}
      <Header onMenuClick={handleMenuClick} onSignOutClick={signOut} />

      <main>
        <GoBack />
        <h1>Editar prato</h1>

        {dish ? (
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

            <ButtonWrapper>
              <DeleteButton>Excluir prato</DeleteButton>
              <Button type="submit" disabled={buttonDisabled}>Salvar alterações</Button>
            </ButtonWrapper>
          </form>
        ) : (
          <p>Carregando...</p>
        )}
      </main>

      <Footer />
    </Container>
  );
}