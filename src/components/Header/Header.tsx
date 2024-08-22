import { useApp } from "../../Context/AppContext";
import { HeaderLogo } from "../HeaderLogo";
import { Menu } from "../Menu";

import * as S from "./Header.styled";

export const Header = () => {
  const { isMenuOpen } = useApp();

  return (
    <div>
      <S.HeaderContainer isOpen={isMenuOpen}>
        <HeaderLogo />

        <Menu />
      </S.HeaderContainer>
    </div>
  );
};
