import { Images } from "@/assets/images";
import Image from "next/image";
import { Dumbbell, Users, Award, Clock } from "lucide-react";

export const metadata = {
   title: "Our Facilities - GymOn Fitness",
   description:
      "Explore our state-of-the-art fitness facilities designed to help you achieve your fitness goals",
};

interface FacilityFeatureProps {
   icon: React.ReactNode;
   title: string;
   description: string;
}

function FacilityFeature({ icon, title, description }: FacilityFeatureProps) {
   return (
      <div className='flex items-start gap-4'>
         <div className='mt-1 rounded-full bg-primary/10 p-2 text-primary'>
            {icon}
         </div>
         <div>
            <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
            <p className='text-slate-600'>{description}</p>
         </div>
      </div>
   );
}

export default function FacilitiesPage() {
   const facilities = [
      {
         icon: <Dumbbell size={20} />,
         title: "State-of-the-Art Equipment",
         description:
            "Our gym features the latest fitness equipment from top brands, ensuring your workout is both effective and enjoyable.",
      },
      {
         icon: <Users size={20} />,
         title: "Spacious Workout Areas",
         description:
            "Enjoy plenty of space for your workouts with dedicated zones for cardio, strength training, and functional fitness.",
      },
      {
         icon: <Award size={20} />,
         title: "Specialized Studios",
         description:
            "Purpose-built studios for yoga, pilates, and group classes with climate control and premium flooring.",
      },
      {
         icon: <Clock size={20} />,
         title: "24/7 Access",
         description:
            "Members enjoy round-the-clock access to our facilities, allowing you to work out on your own schedule.",
      },
   ];

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Our World-Class Facilities
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               At GymOn, we've created the perfect environment for your fitness
               journey with premium equipment and dedicated spaces for every
               workout style.
            </p>
         </div>

         {/* Hero Image */}
         <div className='relative mb-12 aspect-video w-full overflow-hidden rounded-lg'>
            <Image
               src={Images.gallery[0]}
               alt='GymOn fitness facility'
               fill
               priority
               className='object-cover'
            />
         </div>

         {/* Features Grid */}
         <div className='mb-16 grid gap-8 md:grid-cols-2'>
            {facilities.map((facility, index) => (
               <FacilityFeature
                  key={index}
                  icon={facility.icon}
                  title={facility.title}
                  description={facility.description}
               />
            ))}
         </div>

         {/* Facility Highlights */}
         <div className='mb-16'>
            <h2 className='mb-6 text-center text-2xl font-bold'>
               What Sets Our Facilities Apart
            </h2>

            <div className='grid gap-8 md:grid-cols-2'>
               <div>
                  <div className='relative mb-4 aspect-video w-full overflow-hidden rounded-lg'>
                     <Image
                        src={Images.equipment}
                        alt='Modern gym equipment'
                        fill
                        className='object-cover'
                     />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>
                     Modern Equipment
                  </h3>
                  <p className='text-slate-600'>
                     Our gym is equipped with the latest fitness technology and
                     premium equipment from industry-leading brands. From cardio
                     machines with integrated entertainment to advanced strength
                     training equipment, we provide everything you need for an
                     effective workout.
                  </p>
               </div>

               <div>
                  <div className='relative mb-4 aspect-video w-full overflow-hidden rounded-lg'>
                     <Image
                        src={Images.gallery[1]}
                        alt='Spacious training area'
                        fill
                        className='object-cover'
                     />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>
                     Dedicated Training Spaces
                  </h3>
                  <p className='text-slate-600'>
                     Our thoughtfully designed facility features separate zones
                     for different training styles. Enjoy a dedicated functional
                     training area, spacious free weights section, and quieter
                     spaces for stretching and recovery.
                  </p>
               </div>
            </div>
         </div>

         {/* Additional Amenities */}
         <div className='rounded-lg bg-slate-50 p-8'>
            <h2 className='mb-6 text-center text-2xl font-bold'>
               Additional Amenities
            </h2>

            <div className='grid gap-6 md:grid-cols-3'>
               <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <h3 className='mb-3 text-lg font-semibold'>
                     Locker Rooms & Showers
                  </h3>
                  <p className='text-slate-600'>
                     Spacious locker rooms with private showers, secure storage,
                     and complimentary towel service for premium members.
                  </p>
               </div>

               <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <h3 className='mb-3 text-lg font-semibold'>Recovery Zone</h3>
                  <p className='text-slate-600'>
                     Dedicated space for post-workout recovery with foam
                     rollers, stretching mats, and massage guns available for
                     all members.
                  </p>
               </div>

               <div className='rounded-lg bg-white p-6 shadow-sm'>
                  <h3 className='mb-3 text-lg font-semibold'>Nutrition Bar</h3>
                  <p className='text-slate-600'>
                     Convenient in-house nutrition bar offering protein shakes,
                     healthy snacks, and supplements to fuel your workout.
                  </p>
               </div>
            </div>
         </div>

         {/* Virtual Tour CTA */}
         <div className='mt-16 text-center'>
            <h2 className='mb-4 text-2xl font-bold'>Want to See More?</h2>
            <p className='mb-6 text-lg text-slate-600'>
               Book a tour with our staff or try a free day pass to experience
               our facilities firsthand.
            </p>
            <div className='flex flex-col justify-center gap-4 sm:flex-row'>
               <a
                  href='#'
                  className='inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
               >
                  Schedule a Tour
               </a>
               <a
                  href='#'
                  className='inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
               >
                  Get Free Day Pass
               </a>
            </div>
         </div>
      </div>
   );
}
