import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLogo } from "../HeaderLogo";

import { IconButton } from "../IconButton";
import { PAGES } from "../../constants/enums";
import * as S from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen((state) => !state);

  return (
    <div>
      <S.HeaderContainer>
        <HeaderLogo />

        <S.Menu isOpen={isMenuOpen}>
          <IconButton onClick={toggleMenu} />
        </S.Menu>
      </S.HeaderContainer>

      {isMenuOpen && (
        <nav>
          <ul>
            <li>
              <IconButton onClick={() => navigate(PAGES.CATALOG)}>
                Каталог товаров
              </IconButton>
            </li>
            <li>
              <IconButton onClick={() => navigate(PAGES.FORM)}>
                Вязание на заказ
              </IconButton>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
