import { CATALOG_ITEMS } from "../../constants";
import { useGetResolution } from "../../hooks/useGetResolutions";
import { ProductionItem } from "./components/ProductionItem";
import { Container } from "./Productions.styled";

export const Productions = () => {
  const { desktop, tablet, mobile } = useGetResolution();

  const products = CATALOG_ITEMS.map((product, index) => {
    if (desktop) {
      return {
        ...product,
        imagePath: `/image/product-${index + 1}-desktop.jpg`,
      };
    }

    if (tablet) {
      return {
        ...product,
        imagePath: `/image/product-${index + 1}-tablet.jpg`,
      };
    }

    if (mobile) {
      return {
        ...product,
        imagePath: `/image/product-${index + 1}-mobile.jpg`,
      };
    }

    return {
      ...product,
      imagePath: `/image/product-${index + 1}-mobile.jpg`,
    };
  });

  return (
    <Container>
      {products.map(({ imagePath, title, description, price, id }) => (
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
};
