import { sign } from "crypto";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dinner Is Served",
  description: "Meals cooked fresh for busy people and families.",
  navItems: [
    {
      label: "Menu",
      href: "/menu",
    },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    { label: "Login", href: "/login" },
    {
      label: "Logout",
      href: "/logout",
    },
    {
      label: "Admin",
      href: "/admin",
      sublinks: [
        "account-settings",
        "menu",
        "ingredients",
        "calendar-management",
        "about-page",
      ],
    },
    {
      label: "User",
      href: "/user",
      sublinks: ["account-settings", "calendar", "order-history"],
    },
  ],
  links: {
    login: "/login",
    signup: "/signup",
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};
