import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MenuDetailPage from "@/components/pages/MenuDetailPage";
import { getCompanyPageParams, getMenuPage } from "@/lib/menu-pages";

export function generateStaticParams() {
  return getCompanyPageParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getMenuPage("company", slug);
  if (!page) return { title: "Not Found | Mentroid" };

  return {
    title: `${page.item.title} | Mentroid`,
    description: page.item.description,
  };
}

export default async function CompanyDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getMenuPage("company", slug);
  if (!page) notFound();

  return <MenuDetailPage data={page} />;
}
