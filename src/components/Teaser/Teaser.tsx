import { FC } from "react";

import { CatalogTeaserProps } from "./types";
import Typography from "../common/Typography";
import { Container } from "./Teaser.styled";

export const Teaser: FC<CatalogTeaserProps> = ({ title }) => (
  <Container>
    <Typography variant="h1" className="teaser">
      {title}
    </Typography>
  </Container>
);
