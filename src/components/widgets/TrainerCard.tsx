import Image from "next/image";
import Link from "next/link";
import { Trainer } from "@/types";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/common/card";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Star } from "lucide-react";

interface TrainerCardProps {
   trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
   const { id, name, bio, specialties, experience, profileImage, rating } =
      trainer;

   return (
      <Card className='overflow-hidden transition-all justify-between hover:shadow-lg pt-0 gap-3'>
         <div className='relative  w-full overflow-hidden rounded-xl p-4 pb-1 '>
            {profileImage ? (
               <Image
                  src={profileImage}
                  alt={name}
                  // fill
                  width={400}
                  height={400}
                  className='object-cover transition-transform h-[20rem] duration-300 rounded-xl hover:scale-[1.02]'
               />
            ) : (
               <div className='flex h-full w-full items-center justify-center bg-slate-100'>
                  <span className='text-sm text-slate-500'>
                     No image available
                  </span>
               </div>
            )}
         </div>
         <CardHeader className='pb-2'>
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
         </CardHeader>
         <CardContent className='pb-2'>
            <p className='text-sm text-slate-600 line-clamp-3'>{bio}</p>
            <p className='mt-2 text-sm font-medium'>
               {experience} years experience
            </p>
         </CardContent>
         <CardFooter>
            <Button asChild className='w-full'>
               <Link href={`/trainers/${id}`}>View Profile</Link>
            </Button>
         </CardFooter>
      </Card>
   );
}
