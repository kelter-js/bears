import {
  Header,
  Teaser,
  Footer,
  Productions,
  AboutProcess,
} from "../../components";

export const Catalog = () => (
  <div>
    <Header />
    <Teaser title="Каталог товаров" />
    <Productions />
    <AboutProcess />
    <Footer />
  </div>
);
