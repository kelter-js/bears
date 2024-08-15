import { HeaderLogo } from "../HeaderLogo";
import { Menu } from "../Menu";

import * as S from "./Header.styled";

export const Header = () => (
  <div>
    <S.HeaderContainer>
      <HeaderLogo />

      <Menu />
    </S.HeaderContainer>
  </div>
);
