export interface SubMenuItem {
  title: string;
  link: string;
}

export interface MenuItem {
  title: string;
  link?: string;
  subMenu?: SubMenuItem[];
}

export const menuItems: MenuItem[] = [
  { title: "Home", link: "/" },
  {
    title: "About",
    subMenu: [
      { title: "Team", link: "/about/team" },
      { title: "History", link: "/about/history" },
    ],
  },
  {
    title: "Activities",
    subMenu: [
      { title: "Workshops", link: "/activities/workshops" },
      { title: "Seminars", link: "/activities/seminars" },
    ],
  },
  {
    title: "Project",
    subMenu: [
      { title: "Ongoing", link: "/project/ongoing" },
      { title: "Completed", link: "/project/completed" },
    ],
  },
  { title: "Event", link: "/event" },
  { title: "Data", link: "/data" },
  { title: "Media and Gallery", link: "/media-gallery" },
  { title: "Contact", link: "/contact" },
];
