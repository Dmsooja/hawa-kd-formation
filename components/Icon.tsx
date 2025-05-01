"use client";

import { cva, cx } from "class-variance-authority";
import SVG from "react-inlinesvg";

import { ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import type { VariantProps } from "class-variance-authority";

const iconStyles = cva("", {
  variants: {
    size: {
      32: "w-4 h-4 md:w-8 md:h-8",
      48: "w-8 h-8 md:w-12 md:h-12",
      64: "w-12 h-12 md:w-16 md:h-16",
      80: "w-16 h-16 md:w-20 md:h-20",
      96: "w-20 h-20 md:w-24 md:h-24",
      128: "w-24 h-24 md:w-32 md:h-32",
      auto: "w-auto",
    },
    color: {
      "deep-blue": "text-deep-blue",
      red: "text-primary-red"
    },
  },
  defaultVariants: {
    size: 48,
    color: "red",
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
    // get values of width and height attributes
    const [, width, height] = code.match(
      /<svg.*?width="(.*?)" height="(.*?)"/,
    ) || ["", "", ""];

    // check if viewBox is present
    const viewBox = code.match(/viewBox="(.*?)"/);

    let transformedCode = code
      .replace(/fill=".*?"/g, 'fill="currentColor"')
      .replace(/style=".*?"/g, (style) =>
        style.includes("fill:") ? style.replace(/fill:.*?;/g, "") : style,
      );
    // if no viewBox is present, and we have width and height attributes, add viewBox
    if (!viewBox && width && height) {
      transformedCode = transformedCode.replace(
        /<svg/,
        `<svg viewBox="0 0 ${width} ${height}"`,
      );
    }

    return transformedCode;
  };

  return (
    <SVG
      className={cx(iconStyles({ size, color }), className)}
      src={src}
      preProcessor={processSVG}
      onError={(error) => console.log("ICON ERROR", error.message)}
    >
      {fallback && (
        <div className={cx(iconStyles({ size, color }), className)}>
          <PrismicNextImage
            className={cx(
              "relative z-10",
              iconStyles({ size, color }),
              className,
            )}
            field={fallback}
            fallbackAlt=""
          />
        </div>
      )}
    </SVG>
  );
};
