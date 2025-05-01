import { FeatureListWithIconSliceDefaultPrimaryFeaturesItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { RichText } from "./RichText";
import { Icon } from "./Icon";

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
        "mx-auto flex w-full flex-row flex-wrap gap-x-16 gap-y-8 rounded-2xl px-12 py-20 shadow-xl md:flex-nowrap",
        background === "Light Gray" ? "bg-white" : "bg-light-gray",
        className,
      )}
    >
      {item.icon.url?.includes(".svg") ? (
        <div className="mx-auto h-32 w-32 self-center">
          <Icon
            src={item.icon.url}
            size={128}
            color="red"
            fallback={item.icon}
          />
        </div>
      ) : (
        <PrismicNextImage
          field={item.icon}
          imgixParams={{
            monochrome: "F02E3E",
          }}
          className="mx-auto h-32 w-32 self-center"
        />
      )}
      <div className="flex flex-col gap-y-4 text-center md:gap-y-2 md:text-left">
        <RichText field={item.feature_title} />
        <RichText field={item.feature_description} />
      </div>
    </div>
  );
}
