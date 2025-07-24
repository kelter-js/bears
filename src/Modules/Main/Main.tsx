import {
  MainItemCard,
  Header,
  Promo,
  Feedback,
  Contacts,
  Location,
  Footer,
  Features,
} from "../../components";

import { AdaptiveWrapper } from "../../components/common/AdaptiveWrapper";
import { ContactsContainer } from "./Main.styled";

export const Main = () => {
  return (
    <div>
      <Header />
      <Promo />
      <MainItemCard />
      <Features />
      <Feedback />

      <AdaptiveWrapper isMobile isTablet>
        <Contacts />
        <Location />
      </AdaptiveWrapper>

      <AdaptiveWrapper isDesktop>
        <ContactsContainer>
          <Contacts />
          <Location />
        </ContactsContainer>
      </AdaptiveWrapper>
      <Footer />
    </div>
  );
};
