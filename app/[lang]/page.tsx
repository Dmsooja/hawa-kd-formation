import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Header } from "../../components/Header";
import Head from "next/head";

type PageParams = { lang: string };

// const locales = await getLocales();

// const languages = await getLanguages(page, client, locales);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();

  const [page, settings] = await Promise.all([
    client.getSingle<Content.HomeDocument>("home", { lang }),
    client.getSingle<Content.SettingsDocument>("settings", { lang }),
  ]);
  return (
    <>
      <Header settings={settings} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getSingle("home", { lang: params.lang })
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
