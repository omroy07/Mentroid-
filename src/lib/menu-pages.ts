import { navigation } from "@/data/navigation";
import type { ComponentType } from "react";

export const detailCategories = [
  "services",
  "solutions",
  "expertise",
  "industries",
] as const;

export type DetailCategory = (typeof detailCategories)[number];
export type NavigationItem = {
  title: string;
  description: string;
  href: string;
  image?: string;
  icon?: ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
};

export type MenuPageData = {
  category: string;
  group: string;
  item: NavigationItem;
  related: NavigationItem[];
};

export function getMenuPage(category: string, slug: string): MenuPageData | undefined {
  if (category === "company") {
    const groups = navigation.company.groups;
    for (const group of groups) {
      const item = group.items.find((candidate) => candidate.href === `/${slug}`);
      if (item) {
        return {
          category: "Company",
          group: group.title,
          item,
          related: groups.flatMap((entry) => entry.items).filter((entry) => entry.href !== item.href),
        };
      }
    }
    return undefined;
  }

  if (!detailCategories.includes(category as DetailCategory)) return undefined;

  const menu = navigation[category as DetailCategory];
  for (const group of menu.groups) {
    const item = group.items.find((candidate) => candidate.href === `/${category}/${slug}`);
    if (item) {
      return {
        category: menu.title,
        group: group.title,
        item,
        related: menu.groups.flatMap((entry) => entry.items).filter((entry) => entry.href !== item.href),
      };
    }
  }

  return undefined;
}

export function getMenuPageParams(category: DetailCategory) {
  return navigation[category].groups.flatMap((group) =>
    group.items.map((item) => ({
      category,
      slug: item.href.split("/").at(-1)!,
    })),
  );
}

export function getCompanyPageParams() {
  return navigation.company.groups.flatMap((group) =>
    group.items.map((item) => ({ slug: item.href.slice(1) })),
  );
}
