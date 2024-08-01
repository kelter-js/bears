import { useState } from "react";
import { HeaderLogo } from "../HeaderLogo";

import * as S from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <HeaderLogo />

      <S.Menu>123</S.Menu>
    </S.HeaderContainer>
  );
};
