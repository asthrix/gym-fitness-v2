import { trainersData, classesData } from "@/data";
import { Badge } from "@/components/common/badge";
import { Button } from "@/components/common/button";
import { ClassCard } from "@/components/widgets/ClassCard";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface TrainerPageProps {
   params: {
      id: string;
   };
}

export const generateMetadata = ({ params }: TrainerPageProps) => {
   const trainer = trainersData.getTrainerById(params.id);

   if (!trainer) {
      return {
         title: "Trainer Not Found - GymOn Fitness",
      };
   }

   return {
      title: `${trainer.name} - GymOn Fitness Trainer`,
      description: `Learn about ${trainer.name}, expert fitness trainer with ${
         trainer.experience
      } years of experience specializing in ${trainer.specialties.join(", ")}.`,
   };
};

export default function TrainerPage({ params }: TrainerPageProps) {
   const trainer = trainersData.getTrainerById(params.id);

   if (!trainer) {
      notFound();
   }

   const { name, bio, specialties, experience, profileImage, rating, classes } =
      trainer;

   // Get the classes taught by this trainer
   const trainerClasses = classes
      ? classes.map((id) => classesData.getClassById(id)).filter(Boolean)
      : [];

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-6'>
            <Link href='/trainers' className='text-primary hover:underline'>
               ← Back to Trainers
            </Link>
         </div>

         <div className='grid gap-8 lg:grid-cols-3'>
            {/* Trainer Image and Info */}
            <div className='lg:col-span-1'>
               <div className='space-y-6 rounded-lg border p-6'>
                  <div className='text-center'>
                     <div className='relative mx-auto mb-4 aspect-square w-48 overflow-hidden rounded-full'>
                        {profileImage ? (
                           <Image
                              src={profileImage}
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
                     </div>
                     <h1 className='text-2xl font-bold'>{name}</h1>
                     {rating && (
                        <div className='mt-1 flex items-center justify-center gap-1'>
                           <Star className='h-5 w-5 fill-yellow-400 text-yellow-400' />
                           <span className='font-medium'>{rating}</span>
                        </div>
                     )}
                     <p className='mt-1 text-slate-500'>
                        {experience} years experience
                     </p>
                  </div>

                  <div>
                     <h2 className='mb-3 font-semibold'>Specialties</h2>
                     <div className='flex flex-wrap gap-2'>
                        {specialties.map((specialty, index) => (
                           <Badge key={index} variant='outline'>
                              {specialty}
                           </Badge>
                        ))}
                     </div>
                  </div>

                  <Button className='w-full'>Book a Session</Button>
               </div>
            </div>

            {/* Trainer Bio and Classes */}
            <div className='lg:col-span-2'>
               <h2 className='mb-4 text-2xl font-bold'>About {name}</h2>
               <p className='mb-8 whitespace-pre-line text-slate-700'>{bio}</p>

               <h3 className='mb-4 text-xl font-semibold'>Classes by {name}</h3>
               {trainerClasses.length > 0 ? (
                  <div className='grid gap-6 sm:grid-cols-2'>
                     {trainerClasses.map((fitnessClass) => (
                        <ClassCard
                           key={fitnessClass?.id}
                           fitnessClass={fitnessClass!}
                        />
                     ))}
                  </div>
               ) : (
                  <p className='text-slate-600'>
                     No classes currently scheduled for this trainer.
                  </p>
               )}

               <div className='mt-8 rounded-lg border bg-slate-50 p-6'>
                  <h3 className='mb-3 text-lg font-semibold'>
                     Get Personal Training
                  </h3>
                  <p className='mb-4'>
                     Take your fitness journey to the next level with
                     personalized one-on-one training sessions with {name}.
                     Custom programs designed for your specific goals and needs.
                  </p>
                  <div className='flex flex-wrap gap-4'>
                     <Button>Schedule Private Session</Button>
                     <Button variant='outline' asChild>
                        <Link href='/contact'>Request Information</Link>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
