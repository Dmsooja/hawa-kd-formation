import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FeatureListWithIcon`.
 */
export type FeatureListWithIconProps =
  SliceComponentProps<Content.FeatureListWithIconSlice>;

/**
 * Component for "FeatureListWithIcon" Slices.
 */
const FeatureListWithIcon: FC<FeatureListWithIconProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for feature_list_with_icon (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default FeatureListWithIcon;
