import { MembershipType } from "@/types";

export const membershipPlans: MembershipType[] = [
   {
      id: "basic",
      name: "Basic",
      duration: 1,
      price: 49.99,
      features: [
         "Access to gym facilities",
         "Standard equipment usage",
         "Locker room access",
         "Fitness assessment",
         "2 group classes per month",
      ],
   },
   {
      id: "premium",
      name: "Premium",
      duration: 3,
      price: 79.99,
      features: [
         "Full access to gym facilities",
         "All equipment usage",
         "Locker room access with towel service",
         "Comprehensive fitness assessment",
         "Unlimited group classes",
         "1 personal training session per month",
      ],
      isPopular: true,
   },
   {
      id: "elite",
      name: "Elite",
      duration: 12,
      price: 119.99,
      features: [
         "Full 24/7 access to gym facilities",
         "Priority equipment reservation",
         "Premium locker with towel service",
         "Monthly fitness assessments",
         "Unlimited group classes",
         "4 personal training sessions per month",
         "Nutrition consultation",
         "Access to spa facilities",
      ],
   },
];

export const getMembershipPlans = () => membershipPlans;

export const getMembershipById = (id: string): MembershipType | undefined => {
   return membershipPlans.find((plan) => plan.id === id);
};
