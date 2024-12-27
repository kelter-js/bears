import { Link } from "react-router-dom";

import { useGetLinksList } from "./useGetLinksList";
import { useApp } from "../../Context/AppContext";
import { IconButton } from "../IconButton";
import { Icon } from "../Icon";
import AdaptiveWrapper from "../common/AdaptiveWrapper";
import Typography from "../common/Typography";
import * as S from "./Menu.styled";

export const Menu = () => {
  const { isMenuOpen, toggleMenu } = useApp();

  const links = useGetLinksList();

  return (
    <AdaptiveWrapper isMobile>
      <S.Menu isOpen={isMenuOpen}>
        <IconButton className="toggle-button" onClick={toggleMenu} />
      </S.Menu>

      {isMenuOpen && (
        <S.NavContainer>
          <ul>
            {links.map((link) => (
              <S.MenuItem key={link.href}>
                <Link to={link.href} onClick={toggleMenu}>
                  <Typography className="catalog-item">{link.title}</Typography>
                </Link>
              </S.MenuItem>
            ))}

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
