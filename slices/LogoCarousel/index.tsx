import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";

/**
 * Props for `LogoCarousel`.
 */
export type LogoCarouselProps = SliceComponentProps<Content.LogoCarouselSlice>;

/**
 * Component for "LogoCarousel" Slices.
 */
const LogoCarousel: FC<LogoCarouselProps> = ({ slice }) => {
  return (
    <SliceContainer background={slice.primary.background}>

      Placeholder component for logo_carousel (variation: {slice.variation})
      Slices
    </SliceContainer>
  );
};

export default LogoCarousel;
