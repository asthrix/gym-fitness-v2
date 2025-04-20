import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/common/button";
import { Images } from "@/assets/images";

export function HeroSection() {
   return (
      <section className='relative bg-slate-900 py-20 text-white md:py-32'>
         {/* Background gradient */}
         <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-slate-900'></div>

         {/* Background image */}
         <div className='absolute inset-0'>
            <Image
               src={Images.hero}
               alt='Hero background image of a modern gym'
               fill
               className='object-cover opacity-20 mix-blend-overlay'
               priority
            />
         </div>

         <div className='container relative mx-auto px-4'>
            <div className='max-w-3xl'>
               <h1 className='mb-6 text-4xl font-bold  tracking-tight md:text-5xl lg:text-7xl'>
                  Transform Your Body, <br />
                  <span className='text-primary'>Transform Your Life</span>
               </h1>
               <p className='mb-8 text-lg text-slate-300 md:text-xl'>
                  Join GymOn and experience top-tier fitness facilities, expert
                  trainers, and a supportive community to help you reach your
                  goals.
               </p>
               <div className='flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0'>
                  <Button size='lg' asChild>
                     <Link href='/membership'>Start Your Journey</Link>
                  </Button>
                  <Button
                     size='lg'
                     variant='outline'

                     // className='text-primary/70 bg-primary/10 hover:bg-primary/20 hover:text-primary'
                  >
                     <Link href='/classes'>Explore Classes</Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
