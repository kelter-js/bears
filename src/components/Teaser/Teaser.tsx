import { FC } from "react";

import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { CatalogTeaserProps } from "./types";
import { Container, Pattern } from "./Teaser.styled";

export const Teaser: FC<CatalogTeaserProps> = ({ title }) => (
  <Container>
    <Typography variant="h1" className="teaser">
      {title}
    </Typography>

    <AdaptiveWrapper isTablet isDesktop>
      <Pattern alt="pattern" src="/icons/page-pattern-filled-tablet.svg" />
    </AdaptiveWrapper>
  </Container>
);
