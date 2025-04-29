import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";

/**
 * Props for `FeatureOverviewCta`.
 */
export type FeatureOverviewCtaProps =
  SliceComponentProps<Content.FeatureOverviewCtaSlice>;

/**
 * Component for "FeatureOverviewCta" Slices.
 */
const FeatureOverviewCta: FC<FeatureOverviewCtaProps> = ({ slice }) => {
  return (
    <SliceContainer background={slice.primary.background}>
      Placeholder component for feature_overview_cta (variation:{" "}
      {slice.variation}) Slices
    </SliceContainer>
  );
};

export default FeatureOverviewCta;
