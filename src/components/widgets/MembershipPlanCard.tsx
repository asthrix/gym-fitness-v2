"use client";
import { Check } from "lucide-react";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/common/card";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";
import { MembershipType } from "@/types";

interface MembershipPlanCardProps {
   plan: MembershipType;
   onSelectPlan: (planId: string) => void;
}

export function MembershipPlanCard({
   plan,
   onSelectPlan,
}: MembershipPlanCardProps) {
   const { id, name, duration, price, features, isPopular } = plan;

   return (
      <Card
         className={`flex flex-col ${
            isPopular ? "border-primary shadow-md" : ""
         }`}
      >
         <CardHeader>
            <div className='flex items-center justify-between'>
               <CardTitle>{name}</CardTitle>
               {isPopular && <Badge>Most Popular</Badge>}
            </div>
            <CardDescription>
               {duration} Month{duration > 1 ? "s" : ""}
            </CardDescription>
         </CardHeader>
         <CardContent className='flex-grow'>
            <div className='mb-6'>
               <p className='text-3xl font-bold'>
                  ${price}
                  <span className='text-sm font-normal text-slate-500'>
                     /month
                  </span>
               </p>
            </div>
            <ul className='space-y-2'>
               {features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                     <Check className='mr-2 h-5 w-5 shrink-0 text-green-500' />
                     <span className='text-sm'>{feature}</span>
                  </li>
               ))}
            </ul>
         </CardContent>
         <CardFooter>
            <Button
               onClick={() => onSelectPlan(id)}
               className='w-full'
               variant={isPopular ? "default" : "outline"}
            >
               Choose Plan
            </Button>
         </CardFooter>
      </Card>
   );
}
