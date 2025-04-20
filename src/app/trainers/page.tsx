import { trainersData } from "@/data";
import { TrainerCard } from "@/components/widgets/TrainerCard";

export const metadata = {
   title: "Expert Trainers - GymOn Fitness",
   description:
      "Meet our team of professional fitness trainers dedicated to helping you achieve your fitness goals",
};

export default function TrainersPage() {
   const trainers = trainersData.getTrainers();

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Our Expert Trainers
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               Our certified professionals are passionate about helping you
               achieve your fitness goals through personalized guidance and
               motivation.
            </p>
         </div>

         <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {trainers.map((trainer) => (
               <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
         </div>
      </div>
   );
}
