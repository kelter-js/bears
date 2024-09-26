import { MainItemCard } from "../../components/MainItemCard";
import { Header } from "../../components/Header";
import { Promo } from "../../components/Promo";
import { Features } from "../../components/Features";
import { Feedback } from "../../components/Feedback";
import { Contacts } from "../../components/Contacts";

export const Main = () => (
  <div>
    <Header />
    <Promo />
    <MainItemCard />
    <Features />
    <Feedback />
    <Contacts />
  </div>
);
