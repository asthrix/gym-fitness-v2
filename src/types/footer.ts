export interface FooterSocialLink {
   name: string;
   icon: string; // Icon name to be rendered
   url: string;
}

export interface FooterLink {
   label: string;
   href: string;
}

export interface FooterContactInfo {
   address: string[];
   phone: string;
   email: string;
}

export interface FooterHours {
   day: string;
   hours: string;
}

export interface FooterContent {
   brand: {
      name: string;
      icon: string; // Icon name to be rendered
      description: string;
      socialLinks: FooterSocialLink[];
   };
   quickLinks: FooterLink[];
   contact: FooterContactInfo;
   hours: FooterHours[];
   legal: {
      copyright: string;
      links: FooterLink[];
   };
}
