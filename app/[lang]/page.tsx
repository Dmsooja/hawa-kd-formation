import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc, Content } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Header } from "../../components/Header";
import { PageContainer } from "@/components/PageContainer";
import { reverseLocaleLookup } from "@/i18n";

type PageParams = { lang: string };

// const locales = await getLocales();

// const languages = await getLanguages(page, client, locales);

export default async function Home({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { lang } = await params;

  const client = createClient();

  const [page, settings] = await Promise.all([
    client
      .getSingle<Content.HomeDocument>("home", {
        lang: reverseLocaleLookup(lang),
      })
      .catch(() => notFound()),
    client
      .getSingle<Content.SettingsDocument>("settings", {
        lang: reverseLocaleLookup(lang),
      })
      .catch(() => notFound()),
  ]);

  return (
    <PageContainer>
      <Header settings={settings} />
      <SliceZone slices={page.data.slices} components={components} />
    </PageContainer>
  );
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { lang } = await params;

  const client = createClient();

  const page = await client
    .getSingle("home", { lang: reverseLocaleLookup(lang) })
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}
