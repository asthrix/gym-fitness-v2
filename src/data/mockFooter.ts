import { FooterContent } from "@/types/footer";

const footerContent: FooterContent = {
   brand: {
      name: "GymOn",
      icon: "Dumbbell",
      description:
         "Empowering you to reach your fitness goals with expert trainers and state-of-the-art facilities.",
      socialLinks: [
         {
            name: "Facebook",
            icon: "Facebook",
            url: "#",
         },
         {
            name: "Twitter",
            icon: "Twitter",
            url: "#",
         },
         {
            name: "Instagram",
            icon: "Instagram",
            url: "#",
         },
         {
            name: "Youtube",
            icon: "Youtube",
            url: "#",
         },
      ],
   },
   quickLinks: [
      {
         label: "Classes",
         href: "/classes",
      },
      {
         label: "Trainers",
         href: "/trainers",
      },
      {
         label: "Membership",
         href: "/membership",
      },
      {
         label: "Schedule",
         href: "/schedule",
      },
      {
         label: "About Us",
         href: "/facilities",
      },
   ],
   contact: {
      address: ["123 Fitness Street", "New York, NY 10001"],
      phone: "+1 (555) 123-4567",
      email: "info@gymon.com",
   },
   hours: [
      {
         day: "Weekdays",
         hours: "5:00 AM - 10:00 PM",
      },
      {
         day: "Saturday",
         hours: "7:00 AM - 8:00 PM",
      },
      {
         day: "Sunday",
         hours: "8:00 AM - 6:00 PM",
      },
      {
         day: "Holidays",
         hours: "8:00 AM - 4:00 PM",
      },
   ],
   legal: {
      copyright: "© {year} GymOn. All rights reserved.",
      links: [
         {
            label: "Privacy Policy",
            href: "/privacy",
         },
         {
            label: "Terms of Service",
            href: "/terms",
         },
      ],
   },
};

export const getFooterContent = () => {
   return footerContent;
};
