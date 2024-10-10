import Typography from "../common/Typography";
import { Icon } from "../Icon";
import * as S from "./Footer.styled";

export const Footer = () => (
  <S.Container>
    <S.IconsContainer>
      <Icon iconPath={`/icons/insta.svg`} className="insta" />
      <Icon iconPath={`/icons/fb.svg`} className="fb" />
      <Icon iconPath={`/icons/twitter.svg`} className="twitter" />
    </S.IconsContainer>

    <S.Divider />

    <S.ContactsContainer>
      <Typography className="develop-by-title">Разработано</Typography>
      <Icon iconPath={`/icons/htmlacademy.svg`} className="html" />
    </S.ContactsContainer>
  </S.Container>
);
