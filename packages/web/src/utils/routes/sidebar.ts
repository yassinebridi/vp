import {
  CollectionIcon,
  GlobeIcon,
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
        path: "/categories",
        icon: CollectionIcon,
        name: "categories",
      },
      {
        path: "/brands",
        icon: TemplateIcon,
        name: "brands",
      },
      {
        path: "/cities",
        icon: GlobeIcon,
        name: "cities",
      },
    ],
  },
];
