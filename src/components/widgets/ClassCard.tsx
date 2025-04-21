import Link from "next/link";
import { FitnessClass } from "@/types";
import { ContentCard } from "@/components/common/content-card";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Clock, Users } from "lucide-react";
import { CardDescription, CardTitle } from "@/components/common/card";

interface ClassCardProps {
   fitnessClass: FitnessClass;
}

export function ClassCard({ fitnessClass }: ClassCardProps) {
   const {
      id,
      name,
      description,
      trainer,
      duration,
      capacity,
      currentAttendees,
      level,
      image,
   } = fitnessClass;

   const levelBadge = (
      <Badge
         className='absolute right-5 top-5'
         variant={
            level === "beginner"
               ? "default"
               : level === "intermediate"
               ? "default"
               : "destructive"
         }
      >
         {level.charAt(0).toUpperCase() + level.slice(1)}
      </Badge>
   );

   return (
      <ContentCard.Root>
         <ContentCard.Image
            src={image}
            alt={name}
            width={500}
            height={500}
            overlay={levelBadge}
         />
         <ContentCard.Header>
            <CardTitle className='text-xl'>{name}</CardTitle>
            <CardDescription>with {trainer.name}</CardDescription>
         </ContentCard.Header>
         <ContentCard.Body>
            <p className='text-sm text-slate-600 line-clamp-2'>{description}</p>
            <div className='flex items-center gap-4 text-sm mt-2'>
               <div className='flex items-center gap-1'>
                  <Clock size={16} />
                  <span>{duration} mins</span>
               </div>
               <div className='flex items-center gap-1'>
                  <Users size={16} />
                  <span>
                     {currentAttendees}/{capacity}
                  </span>
               </div>
            </div>
         </ContentCard.Body>
         <ContentCard.Footer>
            <Button asChild className='w-full'>
               <Link href={`/classes/${id}`}>View Details</Link>
            </Button>
         </ContentCard.Footer>
      </ContentCard.Root>
   );
}
