import { FAQCategory } from "@/types";

export const faqCategories: FAQCategory[] = [
   {
      id: "membership",
      name: "Membership",
      faqs: [
         {
            id: "membership-1",
            question: "How do I sign up for a membership?",
            answer:
               "You can sign up for a membership online through our website, or visit our facility in person. Our staff will guide you through the registration process and help you choose the best plan for your fitness goals.",
         },
         {
            id: "membership-2",
            question: "Can I cancel my membership anytime?",
            answer:
               "Yes, you can cancel your membership at any time. We require a 30-day notice for cancellations. Please contact our customer service team or visit the reception desk to initiate the cancellation process.",
         },
         {
            id: "membership-3",
            question: "Do you offer family membership plans?",
            answer:
               "Yes, we offer family membership options with special discounts. Family plans include benefits for up to 4 family members living at the same address.",
         },
         {
            id: "membership-4",
            question: "Is there a joining fee?",
            answer:
               "There is a one-time registration fee of $49.99 for new members. We occasionally run promotions where this fee is waived.",
         },
      ],
   },
   {
      id: "classes",
      name: "Classes & Training",
      faqs: [
         {
            id: "classes-1",
            question: "How do I book a class?",
            answer:
               "You can book classes through our mobile app, website, or by calling our reception desk. We recommend booking at least 24 hours in advance as classes tend to fill up quickly.",
         },
         {
            id: "classes-2",
            question: "What happens if I miss a class I've booked?",
            answer:
               "If you can't attend a class, please cancel your booking at least 2 hours before the class starts. Repeated no-shows may result in a temporary restriction on advance bookings.",
         },
         {
            id: "classes-3",
            question: "How do I schedule a personal training session?",
            answer:
               "You can schedule personal training sessions directly with our trainers or through our reception. New clients receive a complimentary fitness assessment with one of our certified trainers.",
         },
      ],
   },
   {
      id: "facilities",
      name: "Facilities & Equipment",
      faqs: [
         {
            id: "facilities-1",
            question: "What facilities do you offer?",
            answer:
               "Our gym features state-of-the-art cardio and strength training equipment, group fitness studios, swimming pool, sauna, locker rooms with showers, and a nutrition bar.",
         },
         {
            id: "facilities-2",
            question: "Are there lockers available?",
            answer:
               "Yes, we provide day-use lockers free of charge. Premium lockers with permanent storage are available for an additional monthly fee.",
         },
         {
            id: "facilities-3",
            question: "Do you provide towels?",
            answer:
               "Towel service is included with Premium and Elite memberships. Basic members can rent towels for a small fee or bring their own.",
         },
      ],
   },
   {
      id: "general",
      name: "General Information",
      faqs: [
         {
            id: "general-1",
            question: "What are your hours of operation?",
            answer:
               "We're open Monday through Friday from 6:00 AM to 10:00 PM, Saturday from 7:00 AM to 8:00 PM, and Sunday from 8:00 AM to 6:00 PM. Hours may vary on holidays.",
         },
         {
            id: "general-2",
            question: "Is there parking available?",
            answer:
               "Yes, we offer free parking for all members in our dedicated parking lot. Additional street parking is also available nearby.",
         },
         {
            id: "general-3",
            question: "What COVID-19 safety measures are in place?",
            answer:
               "We follow all local health guidelines, including enhanced cleaning protocols, hand sanitizing stations, and equipment spacing. Our ventilation system has been upgraded with HEPA filters.",
         },
      ],
   },
];

export const getFAQCategories = () => faqCategories;

export const getFAQCategoryById = (id: string): FAQCategory | undefined => {
   return faqCategories.find((category) => category.id === id);
};
