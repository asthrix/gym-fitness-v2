import Link from "next/link";
import { Button } from "@/components/common/button";
import { ClassCard } from "@/components/widgets/ClassCard";
import { classesData } from "@/data";
import { FitnessClass } from "@/types";

export function FeaturedClassesSection() {
   // Get a few classes to display as featured
   const featuredClasses: FitnessClass[] = classesData.getClasses().slice(0, 3);

   return (
      <section className='py-16 md:py-24'>
         <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
               <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                  Featured Classes
               </h2>
               <p className='mx-auto max-w-2xl text-lg text-slate-600'>
                  Discover our most popular fitness classes taught by expert
                  trainers
               </p>
            </div>

            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4'>
               {featuredClasses.map((fitnessClass) => (
                  <ClassCard
                     key={fitnessClass.id}
                     fitnessClass={fitnessClass}
                  />
               ))}
            </div>

            <div className='mt-12 text-center'>
               <Button size='lg' variant='outline' asChild>
                  <Link href='/classes'>View All Classes</Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
