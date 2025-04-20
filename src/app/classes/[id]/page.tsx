import { classesData } from "@/data";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";
import { Calendar, Clock, User, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ClassPageProps {
   params: {
      id: string;
   };
}

export const generateMetadata = ({ params }: ClassPageProps) => {
   const fitnessClass = classesData.getClassById(params.id);

   if (!fitnessClass) {
      return {
         title: "Class Not Found - GymOn Fitness",
      };
   }

   return {
      title: `${fitnessClass.name} - GymOn Fitness Classes`,
      description: fitnessClass.description,
   };
};

export default function ClassPage({ params }: ClassPageProps) {
   const fitnessClass = classesData.getClassById(params.id);

   if (!fitnessClass) {
      notFound();
   }

   const {
      name,
      description,
      trainer,
      duration,
      capacity,
      currentAttendees,
      schedule,
      level,
      category,
      image,
   } = fitnessClass;

   const daysOfWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
   ];

   // Group schedule by day for better display
   const scheduleByDay = daysOfWeek
      .filter((day) => schedule.some((s) => s.day === day))
      .map((day) => {
         const times = schedule
            .filter((s) => s.day === day)
            .map((s) => `${s.startTime} - ${s.endTime}`);
         return { day, times };
      });

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-6'>
            <Link href='/classes' className='text-primary hover:underline'>
               ← Back to Classes
            </Link>
         </div>

         <div className='grid gap-8 lg:grid-cols-3'>
            {/* Class Image */}
            <div className='lg:col-span-2'>
               <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
                  {image ? (
                     <Image
                        src={image}
                        alt={name}
                        fill
                        className='object-cover'
                     />
                  ) : (
                     <div className='flex h-full w-full items-center justify-center bg-slate-100'>
                        <span className='text-slate-500'>
                           No image available
                        </span>
                     </div>
                  )}
                  <div className='absolute bottom-4 left-4'>
                     <Badge
                        variant={
                           level === "beginner"
                              ? "secondary"
                              : level === "intermediate"
                              ? "default"
                              : "destructive"
                        }
                        className='text-sm'
                     >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                     </Badge>
                  </div>
               </div>
            </div>

            {/* Class Info */}
            <div className='lg:col-span-1'>
               <div className='space-y-6 rounded-lg border p-6'>
                  <div>
                     <h1 className='text-3xl font-bold'>{name}</h1>
                     <div className='mt-2 flex flex-wrap gap-2'>
                        {category.map((cat) => (
                           <Badge key={cat} variant='outline'>
                              {cat}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  <div className='space-y-4 text-sm'>
                     <div className='flex items-center gap-2'>
                        <Clock className='h-5 w-5 text-primary' />
                        <span>{duration} minutes</span>
                     </div>
                     <div className='flex items-center gap-2'>
                        <Users className='h-5 w-5 text-primary' />
                        <span>
                           {currentAttendees}/{capacity} participants
                        </span>
                     </div>
                     <div className='flex items-center gap-2'>
                        <User className='h-5 w-5 text-primary' />
                        <Link
                           href={`/trainers/${trainer.id}`}
                           className='hover:text-primary'
                        >
                           {trainer.name}
                        </Link>
                     </div>
                  </div>

                  <div className='border-t pt-4'>
                     <h3 className='mb-3 font-semibold'>Schedule</h3>
                     <ul className='space-y-2'>
                        {scheduleByDay.map(({ day, times }) => (
                           <li key={day} className='flex items-start gap-2'>
                              <Calendar className='mt-0.5 h-4 w-4 text-primary' />
                              <div>
                                 <span className='font-medium capitalize'>
                                    {day}:{" "}
                                 </span>
                                 {times.join(", ")}
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <Button className='w-full'>Book This Class</Button>
               </div>
            </div>

            {/* Class description and details */}
            <div className='lg:col-span-2'>
               <h2 className='mb-4 text-2xl font-bold'>About This Class</h2>
               <p className='mb-6 text-slate-700'>{description}</p>

               <h3 className='mb-3 text-xl font-semibold'>What to Expect</h3>
               <p className='mb-6 text-slate-700'>
                  This class is designed to help you{" "}
                  {level === "beginner"
                     ? "get started with"
                     : level === "intermediate"
                     ? "improve your"
                     : "master"}{" "}
                  {category.join(" and ")} training. Bring comfortable workout
                  clothes, a water bottle, and a towel. All equipment will be
                  provided by the gym.
               </p>

               <h3 className='mb-3 text-xl font-semibold'>About the Trainer</h3>
               <div className='flex items-start gap-4'>
                  {trainer.profileImage && (
                     <div className='relative h-16 w-16 overflow-hidden rounded-full'>
                        <Image
                           src={trainer.profileImage}
                           alt={trainer.name}
                           fill
                           className='object-cover'
                        />
                     </div>
                  )}
                  <div>
                     <h4 className='font-semibold'>{trainer.name}</h4>
                     <p className='mb-2 text-sm text-slate-500'>
                        {trainer.experience} years experience
                     </p>
                     <p className='text-slate-700'>
                        {trainer.bio.substring(0, 150)}...
                     </p>
                     <Link
                        href={`/trainers/${trainer.id}`}
                        className='mt-2 inline-block text-primary hover:underline'
                     >
                        View full profile
                     </Link>
                  </div>
               </div>
            </div>

            <div className='space-y-4 rounded-lg border p-6'>
               <h3 className='font-semibold'>Ready to Join?</h3>
               <p className='text-sm text-slate-600'>
                  Book this class now or explore our membership options to get
                  unlimited access to all classes.
               </p>
               <div className='space-y-3'>
                  <Button className='w-full'>Book as Guest</Button>
                  <Button variant='outline' asChild className='w-full'>
                     <Link href='/membership'>View Memberships</Link>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
