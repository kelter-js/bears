import { CatalogTeaser } from "../../components/CatalogTeaser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Productions } from "../../components/Productions";
import { AboutProcess } from "../../components/AboutProcess";

export const Catalog = () => (
  <div>
    <Header />
    <CatalogTeaser />
    <Productions />
    <AboutProcess />
    <Footer />
  </div>
);
