import Link from "next/link";
import { Trainer } from "@/types";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Star } from "lucide-react";
import { ContentCard } from "@/components/common/content-card";
import { CardTitle } from "@/components/common/card";

interface TrainerCardProps {
   trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
   const { id, name, bio, specialties, experience, profileImage, rating } =
      trainer;

   return (
      <ContentCard.Root className='justify-between'>
         <ContentCard.Image
            src={profileImage}
            alt={name}
            width={400}
            height={400}
            className='h-[20rem]'
         />
         <ContentCard.Header>
            <div className='flex items-center justify-between'>
               <CardTitle className='text-xl'>{name}</CardTitle>
               {rating && (
                  <div className='flex items-center gap-1'>
                     <Star className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                     <span className='text-sm font-medium'>{rating}</span>
                  </div>
               )}
            </div>
            <div className='flex flex-wrap gap-1'>
               {specialties.slice(0, 3).map((specialty, index) => (
                  <Badge key={index} variant='outline'>
                     {specialty}
                  </Badge>
               ))}
            </div>
         </ContentCard.Header>
         <ContentCard.Body>
            <p className='text-sm text-slate-600 line-clamp-3'>{bio}</p>
            <p className='mt-2 text-sm font-medium'>
               {experience} years experience
            </p>
         </ContentCard.Body>
         <ContentCard.Footer>
            <Button asChild className='w-full'>
               <Link href={`/trainers/${id}`}>View Profile</Link>
            </Button>
         </ContentCard.Footer>
      </ContentCard.Root>
   );
}
