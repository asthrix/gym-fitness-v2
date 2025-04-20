export interface NavItem {
   label: string;
   href: string;
   className?: string; // Making className optional
}

export interface NavCTA {
   label: string;
   href: string;
   variant: "default" | "outline";
}

export interface NavigationData {
   menuItems: NavItem[];
   ctaButtons: NavCTA[];
   logo: {
      text: string;
      icon: string; // Icon name to be rendered in the component
   };
}
