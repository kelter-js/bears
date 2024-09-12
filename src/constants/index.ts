import { FeatureData, PromoData } from "../types";

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
