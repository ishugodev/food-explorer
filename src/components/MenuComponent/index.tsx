import { useNavigate } from "react-router-dom";

import { Container, InputWrapper, NewDish, LogOut } from "./styles";

import { Footer } from "../Footer";

import CloseSvg from "../../assets/Close.svg";
import SearchSvg from "../../assets/Search.svg";
import { USER_ROLE } from "../../utils/role";
import { useAuth } from "../../hook/auth";

interface MenuProps {
  search?: string;
  onSearchChange?: (search: string) => void;
  onMenuClick: () => void;
}

export function MenuComponent(props: MenuProps) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  function handleCreateDish() {
    navigate("/newdish");
  }

  function handleLogOut() {
    signOut();
  }

  return (
    <Container>
      <header>
        <img src={CloseSvg} alt="" onClick={props.onMenuClick} />
        <strong>Menu</strong>
      </header>

      <main>
        <InputWrapper>
          <img src={SearchSvg} alt="" />
          <input type="text" value={props.search} onChange={(e) => props.onSearchChange?.(e.target.value)} placeholder="Busque por pratos ou ingredientes" />
        </InputWrapper>

        <ul>
          {[USER_ROLE.ADMIN].includes(user!.role) && (
            <li>
              <NewDish onClick={handleCreateDish}>Novo prato</NewDish>
            </li>
          )}
          <li>
            <LogOut onClick={handleLogOut}>Sair</LogOut>
          </li>
        </ul>
      </main>

      <Footer />
    </Container>
  );
}
