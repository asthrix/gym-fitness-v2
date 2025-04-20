import { Clock, Dumbbell, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Images } from "@/assets/images";

interface FeatureCardProps {
   icon: React.ReactNode;
   title: string;
   description: string;
   imageSrc?: string | StaticImageData;
}

function FeatureCard({ icon, title, description, imageSrc }: FeatureCardProps) {
   return (
      <div className='flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md'>
         {imageSrc ? (
            <div className='mb-4 h-16 w-16 overflow-hidden rounded-full'>
               <Image
                  src={imageSrc}
                  alt={title}
                  width={64}
                  height={64}
                  className='h-full w-full object-cover'
               />
            </div>
         ) : (
            <div className='mb-4 rounded-full bg-primary/10 p-3 text-primary'>
               {icon}
            </div>
         )}
         <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
         <p className='text-slate-600'>{description}</p>
      </div>
   );
}

export function FeaturesSection() {
   const features = [
      {
         icon: <Dumbbell size={24} />,
         title: "Modern Equipment",
         description:
            "Access to state-of-the-art fitness equipment designed for effectiveness and safety.",
         imageSrc: Images.equipment,
      },
      {
         icon: <Users size={24} />,
         title: "Expert Trainers",
         description:
            "Learn from certified professionals who provide personalized guidance and motivation.",
         imageSrc: Images.trainers.michael,
      },
      {
         icon: <Clock size={24} />,
         title: "Flexible Hours",
         description:
            "Open early until late to accommodate your busy schedule, including weekends.",
      },
      {
         icon: <MapPin size={24} />,
         title: "Nutrition Guidance",
         description:
            "Professional advice on nutrition to complement your fitness journey and maximize results.",
         imageSrc: Images.nutrition,
      },
   ];

   return (
      <section className='bg-slate-50 py-16 md:py-24'>
         <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
               <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                  Why Choose GymOn?
               </h2>
               <p className='mx-auto max-w-2xl text-lg text-slate-600'>
                  We provide everything you need to achieve your fitness goals
                  in a comfortable and motivating environment.
               </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
               {features.map((feature, index) => (
                  <FeatureCard
                     key={index}
                     icon={feature.icon}
                     title={feature.title}
                     description={feature.description}
                     imageSrc={feature.imageSrc}
                  />
               ))}
            </div>
         </div>
      </section>
   );
}
