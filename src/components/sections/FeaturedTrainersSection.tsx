import Link from "next/link";
import { Button } from "@/components/common/button";
import { TrainerCard } from "@/components/widgets/TrainerCard";
import { trainersData } from "@/data";
import { Trainer } from "@/types";

export function FeaturedTrainersSection() {
   // Get a few trainers to display as featured
   const featuredTrainers: Trainer[] = trainersData.getTrainers().slice(0, 3);

   return (
      <section className='bg-slate-50 py-16 md:py-24'>
         <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
               <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                  Meet Our Expert Trainers
               </h2>
               <p className='mx-auto max-w-2xl text-lg text-slate-600'>
                  Our certified professionals are here to help you reach your
                  fitness goals
               </p>
            </div>

            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
               {featuredTrainers.map((trainer) => (
                  <TrainerCard key={trainer.id} trainer={trainer} />
               ))}
            </div>

            <div className='mt-12 text-center'>
               <Button size='lg' variant='outline' asChild>
                  <Link href='/trainers'>View All Trainers</Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
