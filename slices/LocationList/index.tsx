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
    <SliceContainer
      background={slice.primary.background}
      className="w-full items-start md:grid md:grid-cols-3 md:justify-items-center"
    >
      {slice.primary.locations.map((item) => (
        <div className="flex h-fit w-fit flex-row gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary-red size-16 self-center"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-deep-blue self-center break-words font-copy text-2xl font-bold md:text-4xl">
            {item.label}
          </p>
        </div>
      ))}
    </SliceContainer>
  );
};

export default LocationList;
