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
    title: "Deposit Products",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Mudarabah TDR",
        newTab: false,
        path: "/products/product/1",
      },
      {
        id: 24,
        title: "MUDARABAH MPS",
        newTab: false,
        path: "/products/product/2",
      },
      {
        id: 25,
        title: "MUDARABHA MONTHLY DPS",
        newTab: false,
        path: "/products/product/3",
      },
      {
        id: 25,
        title: "MUDARABHA HAJJ SCHEME",
        newTab: false,
        path: "/products/product/4",
      },
      {
        id: 26,
        title: "MUDARABHA UMRAH SCHEME",
        newTab: false,
        path: "/products/product/5",
      },
      {
        id: 27,
        title: "MUDARABAH RETIREMENT PLAN",
        newTab: false,
        path: "/products/product/6",
      },
      {
        id: 27,
        title: "MUDARABAH CASH WAQF",
        newTab: false,
        path: "/products/product/7",
      },
    ],
  },
  {
    id: 3,
    title: "Investment Products",
    newTab: false,
    path: "/blog",
    submenu: [
      {
        id: 31,
        title: "AUTO FINANCE",
        newTab: false,
        path: "/products/product/8",
      },
      {
        id: 34,
        title: "HOME FINANCE",
        newTab: false,
        path: "/products/product/9",
      },
      {
        id: 35,
        title: "INDUSTRIAL FINANCE",
        newTab: false,
        path: "/products/product/10",
      },
      {
        id: 35,
        title: "WORKING CAPITAL FINANCE",
        newTab: false,
        path: "/products/product/11",
      },
      {
        id: 35.1,
        title: "CAPITAL, MACHINERIES & EXPANSION FINANCE",
        newTab: false,
        path: "/products/product/12",
      },
      {
        id: 36,
        title: "AGRICULTURE INVESTMENT",
        newTab: false,
        path: "/products/product/13",
      },
      {
        id: 36,
        title: "WOMEN ENTREPRENEUR",
        newTab: false,
        path: "/products/product/14",
      },
      {
        id: 36,
        title: "NEW ENTREPRENEUR",
        newTab: false,
        path: "/products/product/15",
      },
      {
        id: 36,
        title: "DOCTORS FINANCE",
        newTab: false,
        path: "/products/product/16",
      },
      {
        id: 36,
        title: "MANUFACTURING & TRADING SERVICE FINANCE",
        newTab: false,
        path: "/products/product/17",
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
