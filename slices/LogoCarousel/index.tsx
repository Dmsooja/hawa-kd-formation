"use client";

import { FC, useRef } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { PrismicNextImage } from "@prismicio/next";

const ScrollContainer = ({
  gap,
  ...props
}: {
  gap: number;
  children: React.ReactNode;
}) => {
  const scrollContainerRef = useRef(null);

  const scroll = (shift) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += shift;
    }
  };

  return (
    <div className="relative bg-white px-4 sm:px-6 lg:px-8">
      <button
        onClick={() => scroll(-1280)}
        className="text-silver-darker absolute left-0 z-10 hidden md:block"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Scroll left"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <button
        onClick={() => scroll(1280)}
        className="text-silver-darker absolute right-0 z-10 hidden md:block"
        style={{ top: "50%", transform: "translateY(-50%)" }}
        aria-label="Scroll right"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
      <div
        ref={scrollContainerRef}
        className={`scrollbar-hide no-scrollbar mx-auto flex flex-row overflow-x-scroll scroll-smooth whitespace-nowrap px-2 md:max-w-screen-xl gap-${gap}`}
        {...props}
      />
    </div>
  );
};

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
      <div className="relative mx-auto mb-6 max-w-xs sm:max-w-screen-sm md:max-w-screen-2xl">
        <ScrollContainer gap={5}>
          {slice.primary.logos.map((item, idx) => (
            <div
              key={idx}
              className="grid w-1/2 shrink-0 items-center justify-center object-contain sm:w-1/3 md:h-[110px]"
            >
              <PrismicNextImage className="mx-auto" field={item.logo_image} />
            </div>
          ))}
        </ScrollContainer>
      </div>
    </SliceContainer>
  );
};

export default LogoCarousel;
