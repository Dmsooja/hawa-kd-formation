import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import type * as prismic from "@prismicio/client";
import clsx from "clsx";

/** @type {import("@prismicio/react").JSXMapSerializer} */

export function RichText({
  components,
  companyName,
  classNames,
  theme,
  ...props
}: {
  components?: JSXMapSerializer;
  field: prismic.RichTextField;
  companyName?: string;
  classNames?: string;
  theme?: "white" | "light-gray";
}) {
  const textColor = theme ? "text-red" : "";

  const defaultComponents: JSXMapSerializer = {
    heading1: ({ children }) => (
      <h1
        className={clsx(
          `font-heading text-deep-blue break-words text-4xl font-bold md:text-7xl`,
          classNames,
        )}
      >
        {children}
      </h1>
    ),
    heading2: ({ children }) => (
      <h2
        className={clsx(
          `font-heading text-deep-blue mb-4 break-words text-4xl font-bold md:text-6xl`,
          classNames,
        )}
      >
        {children}
      </h2>
    ),
    heading3: ({ children }) => (
      <h3
        className={clsx(
          `font-heading text-deep-blue mt-4 break-words text-3xl font-bold first:mt-0 md:text-5xl`,
          classNames,
        )}
      >
        {children}
      </h3>
    ),
    heading4: ({ children }) => (
      <h4
        className={clsx(
          `font-heading text-deep-blue mt-4 break-words text-2xl font-bold first:mt-0`,
          classNames,
        )}
      >
        {children}
      </h4>
    ),
    preformatted: ({ children }) => (
      <pre
        className={clsx(
          "bg-gray-dark border-gray-darker text-deep-blue mb-7 mt-3 whitespace-break-spaces rounded-lg p-4 font-code text-sm shadow-lg",
          classNames,
        )}
      >
        <code>{children}</code>
      </pre>
    ),
    paragraph: ({ children }) => (
      <p
        className={clsx(
          "text-deep-blue mb-2 break-words font-copy text-lg font-medium md:text-2xl",
          classNames,
        )}
      >
        {children}
      </p>
    ),
    list: ({ children }) => (
      <ul
        className={clsx(
          `my-2 ml-4 break-words font-copy text-2xl marker:${textColor}`,
          classNames,
        )}
      >
        {children}
      </ul>
    ),
    oList: ({ children }) => (
      <ol
        className={clsx(
          `my-2 ml-4 break-words font-copy text-2xl font-normal marker:${textColor}`,
          classNames,
        )}
      >
        {children}
      </ol>
    ),
    listItem: ({ children }) => (
      <li
        className={clsx(
          "text-deep-blue ml-5 list-outside list-disc pl-2 last:mb-0",
          classNames,
        )}
      >
        {children}
      </li>
    ),
    oListItem: ({ children }) => (
      <li
        className={clsx(
          "text-deep-blue ml-5 list-outside list-decimal pl-2 last:mb-0",
          classNames,
        )}
      >
        {children}
      </li>
    ),
    hyperlink: ({ children, node }) => (
      <PrismicNextLink
        field={node.data}
        className={clsx(
          `break-words font-copy text-2xl underline underline-offset-8 transition-all duration-300 ease-in-out hover:underline-offset-4 ${textColor}`,
          classNames,
        )}
      >
        {children}
      </PrismicNextLink>
    ),
    label: ({ node, children }) => {
      return (
        <>
          {node.data.label === "highlight" && (
            <span className={clsx("font-semibold", textColor, classNames)}>
              {children}
            </span>
          )}
          {node.data.label === "Company Name" && (
            <span className={clsx(classNames)}>
              {companyName ? companyName : "Your company"}
            </span>
          )}
        </>
      );
    },
  };

  return (
    <BasePrismicRichText
      components={{
        ...defaultComponents,
        ...components,
      }}
      {...props}
    />
  );
}
