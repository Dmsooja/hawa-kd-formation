import clsx from "clsx";

export function Card({
  className,
  background,
}: {
  className?: string;
  background?: string;
}) {
  return (
    <div
      className={clsx(
        "mx-auto flex w-full flex-row gap-x-16 rounded-2xl px-12 py-20 sm:px-60 lg:px-40",
        background === "Light Gray" ? "bg-white" : "bg-light-gray",
        className,
      )}
    >
      <div className="self-center">Image</div>
      <div>
        <p>Titre</p>
        <br />
        <p>Description</p>
      </div>
    </div>
  );
}
