export interface ContactInfo {
   address: string;
   phone: string;
   email: string;
   hours: {
      days: string;
      hours: string;
   }[];
   socialMedia: {
      platform: string;
      url: string;
      icon: string;
   }[];
}

export interface ContactFormField {
   id: string;
   label: string;
   type: "text" | "email" | "textarea" | "select";
   placeholder: string;
   required: boolean;
   options?: string[]; // For select fields
}

export interface FAQCategory {
   id: string;
   name: string;
   faqs: FAQ[];
}

export interface FAQ {
   id: string;
   question: string;
   answer: string;
}
