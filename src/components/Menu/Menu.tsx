import { Link, useLocation } from "react-router-dom";

import { useApp } from "../../Context/AppContext";
import { PAGES } from "../../constants/enums";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import AdaptiveWrapper from "../common/AdaptiveWrapper";
import Typography from "../common/Typography";
import * as S from "./Menu.styled";

export const Menu = () => {
  const { isMenuOpen, toggleMenu } = useApp();
  const location = useLocation();

  const getMainLinkData = () => {
    if (location.pathname === PAGES.CATALOG) {
      return {
        mainTitle: "Главная",
        mainLink: PAGES.HOME,
      };
    }

    return {
      mainTitle: "Каталог товаров",
      mainLink: PAGES.CATALOG,
    };
  };

  const { mainTitle, mainLink } = getMainLinkData();

  return (
    <AdaptiveWrapper isMobile>
      <S.Menu isOpen={isMenuOpen}>
        <IconButton className="toggle-button" onClick={toggleMenu} />
      </S.Menu>

      {isMenuOpen && (
        <S.NavContainer>
          <ul>
            <S.MenuItem>
              <Link to={mainLink} onClick={toggleMenu}>
                <Typography className="catalog-item">{mainTitle}</Typography>
              </Link>
            </S.MenuItem>

            <S.MenuItem>
              <Link to={PAGES.FORM} onClick={toggleMenu}>
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
