import { useState } from "react";
import { MapContainer, Container, SendMessageButton } from "./Location.styled";
import { Icon } from "../Icon";
import { useGetResolution } from "../../hooks/useGetResolutions";

export const Location = () => {
  const [isLoading, setLoading] = useState(true);
  const handleFrameLoading = () => setLoading((state) => !state);

  const { mobile, tablet, desktop } = useGetResolution();

  const getMapImage = () => {
    if (mobile) return `/image/map-mobile.png`;
    if (tablet) return `/image/map-tablet.png`;
    if (desktop) return `/image/map-desktop.png`;
  };

  return (
    <Container>
      {isLoading && (
        <MapContainer>
          <img alt="Местоположение офиса" src={getMapImage()} />
          <Icon className="map-pin" iconPath={`/icons/map-pin.svg`} />
        </MapContainer>
      )}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253003128!2d30.32085871610071!3d59.93871916905414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1611154599473!5m2!1sru!2sru"
        style={{ border: 0, height: 455, width: "100%" }}
        aria-label="Адрес компании Мишка в г. Санкт-Петербург, по ул. Большая Конюшенная, д.19/8, офис 101"
        allowFullScreen
        onLoad={handleFrameLoading}
      />

      <SendMessageButton>напишите нам</SendMessageButton>
    </Container>
  );
};
