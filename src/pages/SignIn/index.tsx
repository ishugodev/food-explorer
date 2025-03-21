import { Link } from "react-router-dom";

import { Logo } from "../../components/Logo/Logo.tsx";

import { Container, InputWrapper } from "./styles.ts";
import { Button } from "../../components/Button/index.tsx";
import { useState } from "react";
import { useAuth } from "../../hook/auth.tsx";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <Logo />

      <form onSubmit={handleSignIn}>
        <h1>Faça login</h1>

        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="password">Senha</label>
          <input
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button type="submit">Entrar</Button>
        <Link to="/register">Criar uma conta</Link>
      </form>
    </Container>
  );
}
