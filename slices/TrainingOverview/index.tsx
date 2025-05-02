import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";
import { RichText } from "@/components/RichText";
import { Card } from "./Card";
import { Button } from "@/components/Button";

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
      <RichText field={slice.primary.title} />
      <RichText field={slice.primary.subtitle} />
      <RichText field={slice.primary.description} />
      <div className="flex flex-row flex-wrap justify-around gap-y-12">
        {slice.primary.features.map((item, idx) => (
          <Card key={idx} item={item} background={slice.primary.background} />
        ))}
      </div>
      <Button field={slice.primary.button} color="red" variant="solid" />
    </SliceContainer>
  );
};

export default FeatureOverviewCta;
