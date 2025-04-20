import { NavigationData } from "@/types";

const navigationData: NavigationData = {
   menuItems: [
      { label: "Home", href: "/" },
      { label: "Classes", href: "/classes" },
      { label: "Trainers", href: "/trainers" },
      { label: "Facilities", href: "/facilities" },
      { label: "Membership", href: "/membership" },
      { label: "Schedule", href: "/schedule" },
   ],
   ctaButtons: [
      { label: "Log in", href: "/login", variant: "outline" },
      { label: "Sign up", href: "/signup", variant: "default" },
   ],
   logo: {
      text: "GymOn",
      icon: "Dumbbell",
   },
};

export const getNavigationData = () => {
   return navigationData;
};
