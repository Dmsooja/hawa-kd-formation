import { FeatureListWithIconSliceDefaultPrimaryFeaturesItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { RichText } from "./RichText";

export function Card({
  item,
  className,
  background,
}: {
  item: FeatureListWithIconSliceDefaultPrimaryFeaturesItem;
  className?: string;
  background?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full flex-row gap-x-16 rounded-2xl px-12 py-20",
        background === "Light Gray" ? "bg-white" : "bg-light-gray",
        className,
      )}
    >
        <PrismicNextImage field={item.icon} className="w-32 h-32 text-center"/>
      <div>
        <RichText field={item.feature_title} />
        <RichText field={item.feature_description} />
      </div>
    </div>
  );
}
