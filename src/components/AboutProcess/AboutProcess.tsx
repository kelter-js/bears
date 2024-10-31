import {
  Container,
  Content,
  Title,
  Media,
  Description,
  OrderButton,
} from "./AboutProcess.styled";
import Typography from "../common/Typography";
import { Icon } from "../Icon";

export const AboutProcess = () => (
  <Container>
    <Content>
      <Title>
        <Icon iconName={`/icons/video.svg`} />
        <Typography className="process-title">Процесс производства</Typography>
      </Title>

      <Media>
        <img
          alt="Видео о процессе изготовления"
          src={`/image/video-mobile.jpg`}
        />
        <Icon iconName={`/icons/play.svg`} className="play-icon" />
      </Media>

      <Description>
        <Typography className="process-description">
          По просьбам наших любимых фолловеров мы сняли для вас подробное видео
          о том, как появляются наши товары.
        </Typography>
      </Description>

      <OrderButton>Сделать заказ</OrderButton>
    </Content>
  </Container>
);
