import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "@/components/SliceContainer";

/**
 * Props for `LocationList`.
 */
export type LocationListProps = SliceComponentProps<Content.LocationListSlice>;

/**
 * Component for "LocationList" Slices.
 */
const LocationList: FC<LocationListProps> = ({ slice }) => {
  return (
    <SliceContainer background={slice.primary.background}>

      Placeholder component for location_list (variation: {slice.variation})
      Slices
    </SliceContainer>
  );
};

export default LocationList;
