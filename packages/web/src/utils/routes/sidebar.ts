import { HomeIcon, MoonIcon } from "@heroicons/react/solid";

export const routes = [
  {
    path: "/",
    icon: HomeIcon,
    name: "index",
  },
  {
    path: "/login",
    icon: MoonIcon,
    name: "login",
  },
  {
    name: "pages",
    icon: MoonIcon,
    routes: [
      {
        path: "/login",
        icon: MoonIcon,
        name: "login",
      },
      {
        path: "/login",
        icon: MoonIcon,
        name: "login",
      },
      {
        path: "/login",
        icon: MoonIcon,
        name: "login",
      },
    ],
  },
  {
    name: "pages",
    icon: MoonIcon,
    routes: [
      {
        path: "/login",
        icon: MoonIcon,
        name: "login",
      },
      {
        path: "/login",
        icon: MoonIcon,
        name: "login",
      },
      {
        name: "pages",
        icon: MoonIcon,
        routes: [
          {
            path: "/login",
            icon: MoonIcon,
            name: "login",
          },
          {
            path: "/login",
            icon: MoonIcon,
            name: "login",
          },
        ],
      },
    ],
  },
];
