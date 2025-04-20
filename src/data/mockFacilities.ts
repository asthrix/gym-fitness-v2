import { FacilityPageContent } from "@/types";

// The data for the facilities page
const facilitiesContent: FacilityPageContent = {
   pageTitle: "Our World-Class Facilities",
   pageDescription:
      "At GymOn, we've created the perfect environment for your fitness journey with premium equipment and dedicated spaces for every workout style.",
   heroImage: "gallery[0]", // Reference to Images.gallery[0]

   features: [
      {
         icon: "Dumbbell",
         title: "State-of-the-Art Equipment",
         description:
            "Our gym features the latest fitness equipment from top brands, ensuring your workout is both effective and enjoyable.",
      },
      {
         icon: "Users",
         title: "Spacious Workout Areas",
         description:
            "Enjoy plenty of space for your workouts with dedicated zones for cardio, strength training, and functional fitness.",
      },
      {
         icon: "Award",
         title: "Specialized Studios",
         description:
            "Purpose-built studios for yoga, pilates, and group classes with climate control and premium flooring.",
      },
      {
         icon: "Clock",
         title: "24/7 Access",
         description:
            "Members enjoy round-the-clock access to our facilities, allowing you to work out on your own schedule.",
      },
   ],

   highlights: {
      sectionTitle: "What Sets Our Facilities Apart",
      items: [
         {
            image: "equipment",
            imageAlt: "Modern gym equipment",
            title: "Modern Equipment",
            description:
               "Our gym is equipped with the latest fitness technology and premium equipment from industry-leading brands. From cardio machines with integrated entertainment to advanced strength training equipment, we provide everything you need for an effective workout.",
         },
         {
            image: "gallery[1]",
            imageAlt: "Spacious training area",
            title: "Dedicated Training Spaces",
            description:
               "Our thoughtfully designed facility features separate zones for different training styles. Enjoy a dedicated functional training area, spacious free weights section, and quieter spaces for stretching and recovery.",
         },
      ],
   },

   amenities: {
      sectionTitle: "Additional Amenities",
      items: [
         {
            title: "Locker Rooms & Showers",
            description:
               "Spacious locker rooms with private showers, secure storage, and complimentary towel service for premium members.",
         },
         {
            title: "Recovery Zone",
            description:
               "Dedicated space for post-workout recovery with foam rollers, stretching mats, and massage guns available for all members.",
         },
         {
            title: "Nutrition Bar",
            description:
               "Convenient in-house nutrition bar offering protein shakes, healthy snacks, and supplements to fuel your workout.",
         },
      ],
   },

   cta: {
      title: "Want to See More?",
      description:
         "Book a tour with our staff or try a free day pass to experience our facilities firsthand.",
      primaryButton: {
         text: "Schedule a Tour",
         link: "#",
      },
      secondaryButton: {
         text: "Get Free Day Pass",
         link: "#",
      },
   },
};

export const getFacilitiesContent = () => {
   return facilitiesContent;
};
