"use client";
import { membershipData } from "@/data";
import { MembershipPlanCard } from "@/components/widgets/MembershipPlanCard";
import { Button } from "@/components/common/button";
import Link from "next/link";

// export const metadata = {
//    title: "Membership Plans - GymOn Fitness",
//    description:
//       "Choose from our flexible membership options to start your fitness journey",
// };

export default function MembershipPage() {
   const membershipPlans = membershipData.getMembershipPlans();

   // Note: This is a Server Component, so we can't use useState directly here
   // In a real app, you'd use a client component for handling selections
   // For now, showing the structure without actual state functionality

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Choose Your Membership Plan
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               Find the perfect membership option that fits your fitness goals
               and budget
            </p>
         </div>

         <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-3'>
            {membershipPlans.map((plan) => (
               <MembershipPlanCard
                  key={plan.id}
                  plan={plan}
                  onSelectPlan={(id) => {
                     // This would typically handle the selection in a client component
                     console.log(`Selected plan: ${id}`);
                  }}
               />
            ))}
         </div>

         <div className='mt-12 text-center'>
            <h2 className='mb-6 text-2xl font-bold'>Need More Information?</h2>
            <p className='mx-auto mb-8 max-w-2xl'>
               Contact our membership team for personalized advice on which plan
               is right for you.
            </p>
            <div className='flex flex-col gap-4 sm:flex-row sm:justify-center'>
               <Button asChild>
                  <Link href='/contact'>Contact Us</Link>
               </Button>
               <Button variant='outline' asChild>
                  <Link href='/faq'>View FAQs</Link>
               </Button>
            </div>
         </div>
      </div>
   );
}
