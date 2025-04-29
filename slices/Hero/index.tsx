import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";
import { Button } from "@/components/Button";
import { RichText } from "@/components/RichText";

/**
 * Props for `HeroCta`.
 */
export type HeroCtaProps = SliceComponentProps<Content.HeroCtaSlice>;

/**
 * Component for "HeroCta" Slices.
 */
const HeroCta: FC<HeroCtaProps> = ({ slice }) => {
  return (
    <SliceContainer background={slice.primary.background}>
      <RichText field={slice.primary.title} />
      <RichText field={slice.primary.description} />
      <Button field={slice.primary.button} color="red" variant="solid" />
    </SliceContainer>
  );
};

export default HeroCta;
