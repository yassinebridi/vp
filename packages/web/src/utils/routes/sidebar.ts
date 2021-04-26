import {
  HomeIcon,
  TableIcon,
  TemplateIcon,
  UsersIcon,
} from "@heroicons/react/outline";

export const routes = [
  {
    path: "/",
    icon: HomeIcon,
    name: "Acceuil",
  },
  {
    name: "Gestion",
    icon: TableIcon,
    routes: [
      {
        path: "/users",
        icon: UsersIcon,
        name: "users",
      },
      {
        path: "/brands",
        icon: TemplateIcon,
        name: "brands",
      },
    ],
  },
];
