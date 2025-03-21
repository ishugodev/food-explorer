import { Container, Content, Menu, LogoWrapper, SearchInputWrapper, SearchInput, Order, SignOutImg } from "./styles";

import { useAuth } from "../../hook/auth";
import { USER_ROLE } from "../../utils/role";

import { Logo } from "../Logo/Logo";

import MenuSvg from "../../assets/Menu.svg";
import ReceiptSvg from "../../assets/Receipt.svg";
import SearchSvg from "../../assets/Search.svg";
import SignOutSvg from "../../assets/SignOut.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  search?: string;
  onSearchChange?: (search: string) => void;
  onMenuClick: () => void;
  onSignOutClick: () => void;
}

export function Header(props: HeaderProps) {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleLogoClick() {
    navigate("/");
  }

  function handleNewDish() {
    navigate("/newdish");
  }

  return (
    <Container>
      <Content>

        <Menu onClick={props.onMenuClick}>
          <img src={MenuSvg} alt="" />
        </Menu>

        <LogoWrapper onClick={handleLogoClick}>
          <Logo id="logo" />

          {[USER_ROLE.ADMIN].includes(user!.role) && <p>admin</p>}
        </LogoWrapper>

        <SearchInputWrapper>
          <img src={SearchSvg} alt="" />
          <SearchInput type="text" value={props.search} onChange={(e) => props.onSearchChange?.(e.target.value)} placeholder="Busque por pratos ou ingredientes" />
        </SearchInputWrapper>

        {[USER_ROLE.CUSTOMER].includes(user!.role) && (
          <Order>
            <img src={ReceiptSvg} alt="" />
            <p>pedidos (FIXME)</p>
          </Order>
        )}

        {[USER_ROLE.ADMIN].includes(user!.role) && (
          <Order onClick={handleNewDish}>
            Novo prato
          </Order>
        )}

        <SignOutImg src={SignOutSvg} alt="" onClick={props.onSignOutClick} />
      </Content>
    </Container>
  );
}
