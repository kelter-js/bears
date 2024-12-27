import { Teaser } from "../../components/Teaser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Productions } from "../../components/Productions";
import { AboutProcess } from "../../components/AboutProcess";

export const Catalog = () => (
  <div>
    <Header />
    <Teaser title="Каталог товаров" />
    <Productions />
    <AboutProcess />
    <Footer />
  </div>
);
