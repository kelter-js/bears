import { useState } from "react";
import { Link } from "react-router-dom";

import { PAGES } from "../../constants/enums";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import AdaptiveWrapper from "../common/AdaptiveWrapper";
import Typography from "../common/Typography";
import * as S from "./Menu.styled";

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((state) => !state);

  return (
    <AdaptiveWrapper renderResolutions={{ mobile: true }}>
      <S.Menu isOpen={isMenuOpen}>
        <IconButton className="toggle-button" onClick={toggleMenu} />
      </S.Menu>

      {isMenuOpen && (
        <S.NavContainer>
          <ul>
            <S.MenuItem>
              <Link to={PAGES.CATALOG}>
                <Typography className="catalog-item">
                  Каталог товаров
                </Typography>
              </Link>
            </S.MenuItem>

            <S.MenuItem>
              <Link to={PAGES.FORM}>
                <Typography className="catalog-item">
                  Вязание на заказ
                </Typography>
              </Link>
            </S.MenuItem>

            <S.MenuItem>
              <Icon className="search-icon" iconPath={`/icons/search.svg`} />
              <Typography className="catalog-item">Поиск по сайту</Typography>
            </S.MenuItem>

            <S.MenuItem>
              <Icon className="cart-icon" iconPath={`/icons/cart.svg`} />
              <Typography className="catalog-item">
                Корзина: пока пуста
              </Typography>
            </S.MenuItem>
          </ul>
        </S.NavContainer>
      )}
    </AdaptiveWrapper>
  );
};
