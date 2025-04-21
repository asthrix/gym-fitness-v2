import { ContactFormField, ContactInfo, FAQCategory } from "@/types";

export const contactInfo: ContactInfo = {
   address: "123 Fitness Avenue, Cityville, State 12345",
   phone: "(555) 123-4567",
   email: "info@gymon.com",
   hours: [
      { days: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
      { days: "Saturday", hours: "7:00 AM - 8:00 PM" },
      { days: "Sunday", hours: "8:00 AM - 6:00 PM" },
   ],
   socialMedia: [
      {
         platform: "Instagram",
         url: "https://instagram.com/gymon",
         icon: "instagram",
      },
      {
         platform: "Facebook",
         url: "https://facebook.com/gymon",
         icon: "facebook",
      },
      {
         platform: "Twitter",
         url: "https://twitter.com/gymon",
         icon: "twitter",
      },
      {
         platform: "YouTube",
         url: "https://youtube.com/gymon",
         icon: "youtube",
      },
   ],
};

export const contactFormFields: ContactFormField[] = [
   {
      id: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      required: true,
   },
   {
      id: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@example.com",
      required: true,
   },
   {
      id: "subject",
      label: "Subject",
      type: "select",
      placeholder: "Select a subject",
      required: true,
      options: [
         "Membership Inquiry",
         "Class Information",
         "Personal Training",
         "Facilities",
         "Billing Question",
         "Other",
      ],
   },
   {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "How can we help you?",
      required: true,
   },
];

export const getContactInfo = () => contactInfo;
export const getContactFormFields = () => contactFormFields;
