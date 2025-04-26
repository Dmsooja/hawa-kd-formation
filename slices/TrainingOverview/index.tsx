import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_overview_cta (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FeatureOverviewCta;
