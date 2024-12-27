import { useLocation } from "react-router-dom";
import { PAGES } from "../../constants/enums";

export const useGetLinksList = () => {
  const location = useLocation();

  if (location.pathname === PAGES.CATALOG) {
    return [
      {
        title: "Главная",
        href: PAGES.HOME,
      },
      {
        title: "Вязание на заказ",
        href: PAGES.FORM,
      },
    ];
  }

  if (location.pathname === PAGES.FORM) {
    return [
      {
        title: "Главная",
        href: PAGES.HOME,
      },
      {
        title: "Каталог товаров",
        href: PAGES.CATALOG,
      },
    ];
  }

  return [
    {
      title: "Каталог товаров",
      href: PAGES.CATALOG,
    },
    {
      title: "Вязание на заказ",
      href: PAGES.FORM,
    },
  ];
};
