import { useGetResolution } from "../../hooks/useGetResolutions";
import { Typography } from "../common/Typography";
import { Icon } from "../Icon";

import {
  Container,
  Content,
  Title,
  Media,
  Description,
  OrderButton,
} from "./AboutProcess.styled";

export const AboutProcess = () => {
  const { desktop, tablet, mobile } = useGetResolution();

  const imageSrc = () => {
    if (mobile) {
      return "/image/video-mobile.jpg";
    }

    if (tablet) {
      return "/image/video-tablet.jpg";
    }

    if (desktop) {
      return "/image/video-desktop.jpg";
    }
  };

  return (
    <Container>
      <Content>
        <Title>
          <Icon iconName="/icons/video.svg" className="cam" />
          <Typography className="process-title">
            Процесс производства
          </Typography>
        </Title>

        <Media>
          <img alt="Видео о процессе изготовления" src={imageSrc()} />
          <Icon iconName="/icons/play.svg" className="play-icon" />
        </Media>

        <Description>
          <Typography className="process-description">
            По просьбам наших любимых фолловеров мы сняли для вас подробное
            видео о том, как появляются наши товары.
          </Typography>
        </Description>

        <OrderButton>Сделать заказ</OrderButton>
      </Content>
    </Container>
  );
};
