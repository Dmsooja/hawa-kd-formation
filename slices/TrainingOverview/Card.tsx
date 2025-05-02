import { Icon } from "@/components/Icon";
import { RichText } from "@/components/RichText";
import { FeatureOverviewCtaSliceDefaultPrimaryFeaturesItem } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

export function Card({
  item,
  className,
  background,
}: {
  item: FeatureOverviewCtaSliceDefaultPrimaryFeaturesItem;
  className?: string;
  background?: string;
}) {
  return (
    <div
      className={clsx(
        "min-w-xs flex w-full flex-col flex-wrap gap-x-16 gap-y-8 rounded-2xl px-12 py-20 shadow-xl md:w-1/4 md:flex-nowrap",
        background === "Light Gray" ? "bg-white" : "bg-light-gray",
        className,
      )}
    >
      {item.icon.url?.includes(".svg") ? (
        <div className="mx-auto h-20 w-20 self-center">
          <Icon
            src={item.icon.url}
            size={96}
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
          className="mx-auto h-20 w-20 self-center"
        />
      )}
      <div className="flex flex-col gap-y-4 text-center md:gap-y-2">
        <RichText field={item.feature_title} />
      </div>
    </div>
  );
}
