export const navbarList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 2,
    title: "Booking",
    link: "/booking",
  },
  {
    id: 3,
    title: "About Us",
    link: "/about-us",
  },
  {
    id: 4,
    title: "Dashboard",
    link: "/dashboard/my-dashboard",
  },
  {
    id: 5,
    title: "Contact US",
    link: "/contact",
  },
];



interface Slide {
  id: number;
  title: string;
  subtitle: string;
  heading: string;
  image: string;
}

 export const slides: Slide[] = [
  {
    id: 1,
    title: "MODERN EQUIPMENT",
    subtitle:
      "Duis eu commodo massa. Integer volutpat imperdiet libero vel laoreet sed euismod ligula.",
    heading: "Contactless Car Wash",
    image:
      "http://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg",
  },
  {
    id: 2,
    title: "PROFESSIONAL SERVICE",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    heading: "Premium Auto Care",
    image:
      "http://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_02.jpg",
  },
  {
    id: 3,
    title: "QUALITY GUARANTEED",
    subtitle:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heading: "Expert Car Detailing",
    image:
      "http://aqualine.like-themes.com/wp-content/uploads/2018/02/SLIDE_04.jpg",
  },
];