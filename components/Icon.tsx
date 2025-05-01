"use client";

import { cva, cx } from "class-variance-authority";
import SVG from "react-inlinesvg";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import type { VariantProps } from "class-variance-authority";

const iconStyles = cva("", {
  variants: {
    size: {
      32: "w-8 h-8",
      48: "w-12 h-12",
      64: "w-16 h-16",
      96: "w-24 h-24",
      128: "w-32 h-32",
      auto: "w-auto"
    },
    color: {
      "deep-blue": "text-deep-blue",
      gray: "text-gray-darker",
    },
  },
  defaultVariants: {
    size: 48,
    color: "deep-blue",
  },
});

export type IconProps = {
  className?: string;
  src: string;
  size?: VariantProps<typeof iconStyles>["size"];
  color?: VariantProps<typeof iconStyles>["color"];
  fallback?: ImageField;
};

/**
 * Icon
 * @param {string} className Additional class names
 * @param {string} src Path to SVG
 * @param {string} size Size of icon
 * @param {string} color Color of icon
 * @param {ImageField} fallback Fallback image
 * @returns {JSX.Element} Icon component
 * @example
 * <Icon src="/assets/svg/icon.svg" size="lg" color="purple" />
 */

export const Icon = ({ className, src, size, color, fallback }: IconProps) => {
  const processSVG = (code: string) => {
    return code
      .replace(/fill=".*?"/g, 'fill="currentColor"')
      .replace(/style=".*?"/g, (style) =>
        style.includes("fill:") ? style.replace(/fill:.*?;/g, "") : style
      );
  };

  return (
    <SVG
      className={cx(iconStyles({ size, color }), className)}
      src={src}
      // preProcessor={(code) => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
      preProcessor={processSVG}
    >
      {fallback && (
        <div
          className={cx(
            "relative rounded-xl overflow-hidden",
            iconStyles({ size, color }),
            className
          )}
        >
          <PrismicNextImage
            className={cx(
              "z-10 relative",
              iconStyles({ size, color }),
              className
            )}
            field={fallback}
            fallbackAlt=""
          />
        </div>
      )}
    </SVG>
  );
};
