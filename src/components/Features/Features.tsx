import { FEATURE_ITEMS } from "../../constants";
import { Icon } from "../Icon";
import FeatureItem from "./components/FeatureItem";
import Typography from "../common/Typography";
import * as S from "./Features.styled";

export const Features = () => (
  <S.Container>
    <Typography variant="h2" className="features-header">
      Коротко о нас:
    </Typography>

    <ul>
      {FEATURE_ITEMS.map((feature) => (
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
