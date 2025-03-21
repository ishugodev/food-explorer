import { Link, useNavigate } from "react-router-dom";

import { Container, InputWrapper } from "./styles.ts";
import { useState } from "react";
import { Button } from "../../components/Button/index.tsx";
import { Logo } from "../../components/Logo/Logo.tsx";
import { api } from "../../services/api.ts";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert("error" + error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Logo />

      <form onSubmit={handleSignUp}>
        <h1>Crie sua conta</h1>

        <InputWrapper>
          <label htmlFor="">Seu nome</label>
          <input
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">Email</label>
          <input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="">Senha</label>
          <input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button type="submit">Criar conta</Button>

        <Link to="/">Já tenho uma conta</Link>
      </form>
    </Container>
  );
}
