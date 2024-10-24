import { CATALOG_ITEMS } from "../../constants";
import { ProductionItem } from "./components/ProductionItem";
import { Container } from "./Productions.styled";

export const Productions = () => (
  <Container>
    {CATALOG_ITEMS.map(({ imagePath, title, description, price, id }) => (
      <ProductionItem
        key={id}
        imagePath={imagePath}
        title={title}
        description={description}
        price={price}
      />
    ))}
  </Container>
);
