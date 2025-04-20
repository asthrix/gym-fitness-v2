import Image from "next/image";
import Link from "next/link";
import { FitnessClass } from "@/types";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/common/card";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { Clock, Users } from "lucide-react";

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

   return (
      <Card className='overflow-hidden transition-all hover:shadow-lg pt-0 gap-3'>
         <div className='relative  w-full overflow-hidden rounded-xl p-4 pb-1'>
            {image ? (
               <Image
                  src={image}
                  alt={name}
                  width={400}
                  height={500}
                  className='object-cover transition-transform duration-300 rounded-xl hover:scale-[1.02]'
               />
            ) : (
               <div className='flex h-full w-full items-center justify-center bg-slate-100'>
                  <span className='text-sm text-slate-500'>
                     No image available
                  </span>
               </div>
            )}
            <Badge
               className='absolute right-5 top-5'
               variant={
                  level === "beginner"
                     ? "secondary"
                     : level === "intermediate"
                     ? "default"
                     : "destructive"
               }
            >
               {level.charAt(0).toUpperCase() + level.slice(1)}
            </Badge>
         </div>
         <CardHeader className='pb-2'>
            <CardTitle className='text-xl'>{name}</CardTitle>
            <CardDescription>with {trainer.name}</CardDescription>
         </CardHeader>
         <CardContent className='space-y-2 pb-2'>
            <p className='text-sm text-slate-600 line-clamp-2'>{description}</p>
            <div className='flex items-center gap-4 text-sm'>
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
         </CardContent>
         <CardFooter>
            <Button asChild className='w-full'>
               <Link href={`/classes/${id}`}>View Details</Link>
            </Button>
         </CardFooter>
      </Card>
   );
}
