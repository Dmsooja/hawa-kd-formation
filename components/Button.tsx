import clsx from "clsx";
import type * as prismic from "@prismicio/client";
import type * as clsxT from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";

const baseStyles: clsxT.ClassDictionary = {
  solid:
    "w-fit group inline-flex items-center justify-center rounded-full py-2 px-4 text-lg md:text-2xl font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  outline:
    "w-fit group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-lg md:text-2xl font-semibold focus:outline-none",
  link: "w-fit group inline-flex items-center justify-center py-2 px-4 text-lg md:text-2xl font-semibold underline underline-offset-8 hover:underline-offset-4 transition-all duration-300 ease-in-out",
};

const variantStyles: clsxT.ClassDictionary = {
  solid: {
    slate:
      "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
    red: "bg-primary-red text-white hover:bg-red-100 active:bg-primary-red active:text-white focus-visible:outline-white",
  },
  outline: {
    slate:
      "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
    red: "ring-red-700 text-white hover:ring-red-500 active:ring-red-700 active:text-red-400 focus-visible:outline-white",
  },
  link: {
    slate: "text-slate-700 hover:text-slate-900",
    red: "text-primary-red hover:text-red-100 active:text-red-300",
  },
};

export function Button({
  variant = "solid",
  color = "red",
  className,
  href = "#",
  field,
  document,
  submit,
  button,
  ...props
}: {
  variant?: string;
  color?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  field?: prismic.LinkField;
  document?: prismic.PrismicDocument;
  submit?: boolean;
  button?: boolean;
}) {
  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    className,
  );

  if (submit) {
    return <button type="submit" className={className} {...props} />;
  }

  if (button) {
    return <button type="button" className={className} {...props} />;
  }

  if (field) {
    return <PrismicNextLink className={className} {...props} field={field} />;
  }

  return document ? (
    <PrismicNextLink className={className} {...props} document={document} />
  ) : (
    <PrismicLink className={className} {...props} href={href} />
  );
}
