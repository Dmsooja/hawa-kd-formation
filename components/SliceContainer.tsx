import clsx from "clsx";

export function SliceContainer({
  className,
  background,
  ...props
}: {
  className?: string;
  background?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={clsx(
        "mx-auto w-full flex flex-col gap-y-12 px-4 py-20 md:px-40",
        background === "Light Gray" ? "bg-light-gray" : "bg-white",
        className,
      )}
      {...props}
    />
  );
}
