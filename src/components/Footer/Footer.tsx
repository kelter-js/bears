import { HTMLAcademyIcon } from "../common/HTMLAcademyIcon";
import { InstagramIcon } from "../common/InstagramIcon";
import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { FacebookIcon } from "../common/FacebookIcon";
import { FooterLogo } from "../common/FooterLogo";
import { TwitterIcon } from "../common/TwitterIcon";
import { Typography } from "../common/Typography";
import * as S from "./Footer.styled";

export const Footer = () => (
  <S.Container>
    <AdaptiveWrapper isTablet isDesktop>
      <FooterLogo className="logo" />
    </AdaptiveWrapper>

    <S.IconsContainer>
      <InstagramIcon className="insta" />
      <FacebookIcon className="fb" />
      <TwitterIcon className="twitter" />
    </S.IconsContainer>

    <AdaptiveWrapper isMobile>
      <S.Divider />
    </AdaptiveWrapper>

    <S.ContactsContainer>
      <Typography className="develop-by-title">Разработано</Typography>
      <HTMLAcademyIcon className="html" />
    </S.ContactsContainer>
  </S.Container>
);
