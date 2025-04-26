import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LocationList`.
 */
export type LocationListProps = SliceComponentProps<Content.LocationListSlice>;

/**
 * Component for "LocationList" Slices.
 */
const LocationList: FC<LocationListProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for location_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LocationList;
