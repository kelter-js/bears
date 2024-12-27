import { Teaser } from "../../components/Teaser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { FormOrder } from "../../components/FormOrder";

export const Form = () => (
  <div>
    <Header />
    <Teaser title="Вязание на заказ" />
    <FormOrder />
    <Footer />
  </div>
);
