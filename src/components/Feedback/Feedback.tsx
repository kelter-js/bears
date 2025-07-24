import { AdaptiveWrapper } from "../common/AdaptiveWrapper";
import { Typography } from "../common/Typography";
import { Icon } from "../Icon";
import * as S from "./Feedback.styled";

export const Feedback = () => (
  <S.Container>
    <AdaptiveWrapper isTablet isDesktop>
      <img src="/image/review.jpg" className="feedback-image" alt="feedback" />
    </AdaptiveWrapper>

    <Typography variant="h2" className="feedback-title">
      Отзывы
    </Typography>

    <Typography className="feedback-text">
      Я молодая мама, но всё равно фотографии не набирали и близко такого
      количества лайков, как у популярных инстамамочек. В отчаянии, я накупила
      аксессуаров и игрушек в Мишке, и мои фотографии сразу стали более
      стильными, а также набирают больше лайков!
    </Typography>

    <S.AuthorContainer>
      <Typography className="feedback-author-name">
        Анастасия Красильникова
      </Typography>
      <Typography className="feedback-author-tag">@misssssiskras</Typography>
    </S.AuthorContainer>

    <S.ControlContainer>
      <S.Control>
        <Icon iconPath={`/icons/arrow-right.svg`} className="control-left" />
      </S.Control>

      <S.Control>
        <Icon iconPath={`/icons/arrow-right.svg`} className="control-right" />
      </S.Control>
    </S.ControlContainer>

    <S.SendFeedbackButton>Написать</S.SendFeedbackButton>

    <AdaptiveWrapper isMobile>
      <Icon
        className="feedback-pattern"
        iconPath={`/icons/page-pattern-mobile.svg`}
      />
    </AdaptiveWrapper>

    <AdaptiveWrapper isTablet isDesktop>
      <Icon
        className="feedback-pattern"
        iconPath={`/icons/page-pattern-tablet.svg`}
      />
    </AdaptiveWrapper>
  </S.Container>
);
