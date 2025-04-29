import clsx from "clsx";

export function PageContainer({
  className,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx("mx-auto w-full", className)}
      {...props}
    />
  );
}
