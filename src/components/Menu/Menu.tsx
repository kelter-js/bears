import { Link } from "react-router-dom";

import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { useGetLinksList } from "./useGetLinksList";
import { useApp } from "../../Context/AppContext";

import { IconButton } from "../IconButton";
import { SearchIcon } from "../common/SearchIcon";
import { Typography } from "../common/Typography";
import { CartIcon } from "../common/CartIcon";
import * as S from "./Menu.styled";

export const Menu = () => {
  const { isMenuOpen, toggleMenu } = useApp();

  const links = useGetLinksList();

  return (
    <>
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
                    <Typography className="catalog-item">
                      {link.title}
                    </Typography>
                  </Link>
                </S.MenuItem>
              ))}

              <S.MenuItem>
                <SearchIcon className="search-icon" />
                <Typography className="catalog-item">Поиск по сайту</Typography>
              </S.MenuItem>

              <S.MenuItem className="cart-item">
                <CartIcon className="cart-icon" />
                <Typography className="catalog-item ">
                  Корзина: пока пуста
                </Typography>
              </S.MenuItem>
            </ul>
          </S.NavContainer>
        )}
      </AdaptiveWrapper>

      <AdaptiveWrapper isTablet isDesktop>
        <S.Actions>
          <S.MenuItem isButton>
            <SearchIcon className="search-icon" />
          </S.MenuItem>

          <S.MenuItem className="cart-item">
            <CartIcon className="cart-icon" />
            <Typography className="catalog-item">
              Корзина: пока пуста
            </Typography>
          </S.MenuItem>
        </S.Actions>

        <S.LinksList>
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={toggleMenu}>
              <Typography className="catalog-link">{link.title}</Typography>
            </Link>
          ))}
        </S.LinksList>

        <AdaptiveWrapper isDesktop>
          <S.AdditionalOptionsContainer>
            <Typography className="additional-option">
              Новые поступления
            </Typography>

            <Typography className="additional-option">Распродажа</Typography>
          </S.AdditionalOptionsContainer>
        </AdaptiveWrapper>

        <Typography className="promo-text">
          Бесплатная доставка по России
        </Typography>
      </AdaptiveWrapper>
    </>
  );
};
