import { FeatureData, PromoData, CatalogItemData } from "../types";

export const PROMO_ITEMS: PromoData[] = [
  {
    description: "Предметы  интерьера",
    pathIcon: "/icons/interior.svg",
    className: "promo-interier",
    id: 0,
  },
  {
    description: "Детские  игрушки",
    pathIcon: "/icons/toy.svg",
    className: "promo-toy",
    id: 1,
  },
];

export const FEATURE_ITEMS: FeatureData[] = [
  {
    title: "Экологически  чистые материалы",
    pathIcon: "/icons/flower.svg",
    className: "feature-flower",
    id: 0,
  },
  {
    title: "Скандинавский стиль  по российской цене",
    pathIcon: "/icons/money.svg",
    className: "feature-money",
    id: 1,
  },
  {
    title: "Увеличивает лайки на фотографиях",
    pathIcon: "/icons/heart.svg",
    className: "feature-photo",
    id: 2,
  },
  {
    title: "Связано вручную с  любовью и умилением",
    pathIcon: "/icons/chain.svg",
    className: "feature-ball",
    id: 3,
  },
  {
    title: "Поддержка\u00A0отечественного производителя",
    pathIcon: "/icons/rocket.svg",
    className: "feature-rocket",
    id: 4,
  },
  {
    title: "Поставляется в  подарочной упаковке",
    pathIcon: "/icons/gift.svg",
    className: "feature-gift",
    id: 5,
  },
];

export const CATALOG_ITEMS: CatalogItemData[] = [
  {
    imagePath: "/image/product-1-mobile.jpg",
    title: "Зайчик-попрыгайчик",
    description: "Рост 30 см, вес 200 г",
    price: "1200 руб.",
    id: 0,
  },
  {
    imagePath: "/image/product-2-mobile.jpg",
    title: "Корзинка для белья",
    description: "Диаметр 15 см, высота 10 см",
    price: "690 руб.",
    id: 1,
  },
  {
    imagePath: "/image/product-3-mobile.jpg",
    title: "Большая корзинка для игрушек",
    description: "Диаметр 30 см, высота 30 см",
    price: "1500 руб.",
    id: 2,
  },
];
