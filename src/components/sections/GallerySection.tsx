import Image from "next/image";
import { Button } from "@/components/common/button";
import Link from "next/link";
import { Images } from "@/assets/images";

export function GallerySection() {
   return (
      <section className='py-16 md:py-24'>
         <div className='container mx-auto px-4'>
            <div className='mb-12 text-center'>
               <h2 className='mb-4 text-3xl font-bold md:text-4xl'>
                  Our Fitness Center
               </h2>
               <p className='mx-auto max-w-2xl text-lg text-slate-600'>
                  Take a peek inside our state-of-the-art facilities designed to
                  help you reach your fitness goals
               </p>
            </div>

            <div className='grid gap-4 md:grid-cols-3'>
               {Images.gallery.map((image, index) => (
                  <div
                     key={index}
                     className='relative aspect-square overflow-hidden rounded-lg'
                  >
                     <Image
                        src={image}
                        alt={`Gym facility image ${index + 1}`}
                        fill
                        className='object-cover transition duration-300 hover:scale-105'
                     />
                  </div>
               ))}
            </div>

            <div className='mt-10 text-center'>
               <Button asChild variant='outline' size='lg'>
                  <Link href='/facilities'>
                     Learn More About Our Facilities
                  </Link>
               </Button>
            </div>
         </div>
      </section>
   );
}
