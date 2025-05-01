import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";
import clsx from "clsx";
import { Card } from "@/components/Card";
import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";

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
      <RichText field={slice.primary.section_title} />
      {slice.primary.features.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
      <Button field={slice.primary.button} color="red" variant="solid" />
    </SliceContainer>
  );
};

export default FeatureListWithIcon;
