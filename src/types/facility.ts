export interface FacilityFeature {
   icon: string; // Icon name to be rendered in the component
   title: string;
   description: string;
}

export interface FacilityHighlight {
   image: string; // Image reference to be used from Images
   imageAlt: string;
   title: string;
   description: string;
}

export interface FacilityAmenity {
   title: string;
   description: string;
}

export interface FacilityPageContent {
   pageTitle: string;
   pageDescription: string;
   heroImage: string; // Will use Images.gallery[0]
   features: FacilityFeature[];
   highlights: {
      sectionTitle: string;
      items: FacilityHighlight[];
   };
   amenities: {
      sectionTitle: string;
      items: FacilityAmenity[];
   };
   cta: {
      title: string;
      description: string;
      primaryButton: {
         text: string;
         link: string;
      };
      secondaryButton: {
         text: string;
         link: string;
      };
   };
}
