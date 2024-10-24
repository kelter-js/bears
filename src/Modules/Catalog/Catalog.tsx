import { CatalogTeaser } from "../../components/CatalogTeaser";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Productions } from "../../components/Productions";

export const Catalog = () => (
  <div>
    <Header />
    <CatalogTeaser />
    <Productions />
    <Footer />
  </div>
);
