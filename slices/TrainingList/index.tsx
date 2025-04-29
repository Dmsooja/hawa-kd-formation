import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";
import clsx from "clsx";
import { Card } from "@/components/Card";

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
    <SliceContainer background={slice.primary.background}>
      Title
      <Card />
    </SliceContainer>
  );
};

export default FeatureListWithIcon;
