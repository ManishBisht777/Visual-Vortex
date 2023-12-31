export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Vortex",
  description: "Generate and play",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Store",
      href: "/store",
    },
    {
      title: "Generate",
      href: "/generate",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
