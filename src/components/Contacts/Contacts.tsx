import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { Icon } from "../Icon";

import * as S from "./Contacts.styled";

export const Contacts = () => (
  <S.Container>
    <Typography variant="h3" className="contacts-header">
      Контакты
    </Typography>
    <AdaptiveWrapper isTablet isDesktop>
      <Icon iconName="/icons/flag.svg" className="flag" />
    </AdaptiveWrapper>

    <S.ContactsContent>
      <S.ContactMetaContainer>
        <Typography className="contact">e-mail:</Typography>

        <Typography className="contact email">
          info@mimimishkashop.ru
        </Typography>
      </S.ContactMetaContainer>

      <S.ContactMetaContainer>
        <Typography className="contact">адрес:</Typography>

        <Typography className="contact">
          г. Санкт-Петербург
          <br /> ул. Большая Конюшенная
          <br /> д. 19/8, офис 101
        </Typography>
      </S.ContactMetaContainer>
    </S.ContactsContent>
  </S.Container>
);
