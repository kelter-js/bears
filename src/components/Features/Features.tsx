import { FEATURE_ITEMS, FEATURE_ITEMS_DESKTOP } from "../../constants";
import { useGetResolution } from "../../hooks/useGetResolutions";
import { Typography } from "../common/Typography";
import { Icon } from "../Icon";
import FeatureItem from "./components/FeatureItem";
import * as S from "./Features.styled";

export const Features = () => {
  const { desktop } = useGetResolution();
  const itemsToRender = desktop ? FEATURE_ITEMS_DESKTOP : FEATURE_ITEMS;

  return (
    <S.Container>
      <Typography variant="h2" className="features-header">
        Коротко о нас:
      </Typography>

      <ul>
        {itemsToRender.map((feature) => (
          <FeatureItem
            key={feature.id}
            title={feature.title}
            icon={
              <Icon iconName={feature.pathIcon} className={feature.className} />
            }
          />
        ))}
      </ul>
    </S.Container>
  );
};
