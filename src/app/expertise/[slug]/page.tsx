import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ExpertiseDetailPage from "@/components/pages/ExpertiseDetailPage";
import { getMenuPage, getMenuPageParams } from "@/lib/menu-pages";

export function generateStaticParams() {
  return getMenuPageParams("expertise").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getMenuPage("expertise", slug);
  return page ? { title: `${page.item.title} | Mentroid Expertise`, description: page.item.description } : { title: "Not Found | Mentroid" };
}

export default async function ExpertiseDetailRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getMenuPage("expertise", slug);
  if (!page) notFound();
  return <ExpertiseDetailPage data={page} />;
}
