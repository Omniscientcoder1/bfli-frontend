import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "About",
    newTab: false,
    path: "/about",
  },
  {
    id: 2,
    title: "Business",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 24,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 25,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 25,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 25.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 26,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  {
    id: 3,
    title: "Retail",
    newTab: false,
    path: "/blog",
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
  
  // {
  //   id: 4,
  //   title: "Products",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
