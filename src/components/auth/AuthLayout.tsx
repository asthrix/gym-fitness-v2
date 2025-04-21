"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navigationData } from "@/data";
import { Images } from "@/assets/images";

interface AuthLayoutProps {
   title: string;
   subtitle: string;
   children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
   const logo = navigationData.getNavigationData().logo;

   return (
      <div className='min-h-screen grid md:grid-cols-2 lg:grid-cols-3'>
         {/* Left side - Brand panel with background image */}
         <div className='relative hidden md:block md:flex-col md:items-center md:justify-center lg:col-span-2'>
            {/* Background image */}
            <div className='absolute inset-0 w-full h-full overflow-hidden'>
               <Image
                  src={Images.gallery[0]}
                  alt='Gym background'
                  fill
                  priority
                  className='object-cover'
                  sizes='(min-width: 1024px) 66vw, (min-width: 768px) 50vw, 100vw'
               />
               <div className='absolute inset-0 bg-black/80 opacity-90' />
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-2xl mx-auto text-center text-white p-8 flex flex-col items-center justify-start pt-16 h-full'>
               <div className='mb-8'>
                  <h1 className='text-4xl font-bold mb-4'>
                     Transform Your Fitness Journey
                  </h1>
                  <p className='text-xl opacity-90'>
                     Join thousands of members who have already transformed
                     their lives with GymOn's premium facilities and expert
                     trainers.
                  </p>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
                  <div className='text-center'>
                     <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path d='M18 8h1a4 4 0 0 1 0 8h-1'></path>
                           <path d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'></path>
                           <line x1='6' y1='1' x2='6' y2='4'></line>
                           <line x1='10' y1='1' x2='10' y2='4'></line>
                           <line x1='14' y1='1' x2='14' y2='4'></line>
                        </svg>
                     </div>
                     <h3 className='text-lg font-semibold'>
                        Premium Equipment
                     </h3>
                     <p className='opacity-80'>
                        State-of-the-art equipment for all fitness levels
                     </p>
                  </div>

                  <div className='text-center'>
                     <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <circle cx='12' cy='12' r='10'></circle>
                           <path d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'></path>
                           <line x1='2' y1='12' x2='22' y2='12'></line>
                        </svg>
                     </div>
                     <h3 className='text-lg font-semibold'>24/7 Access</h3>
                     <p className='opacity-80'>
                        Train whenever it suits your schedule
                     </p>
                  </div>

                  <div className='text-center'>
                     <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center'>
                        <svg
                           xmlns='http://www.w3.org/2000/svg'
                           width='24'
                           height='24'
                           viewBox='0 0 24 24'
                           fill='none'
                           stroke='currentColor'
                           strokeWidth='2'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                        >
                           <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                           <circle cx='9' cy='7' r='4'></circle>
                           <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                           <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                        </svg>
                     </div>
                     <h3 className='text-lg font-semibold'>Expert Trainers</h3>
                     <p className='opacity-80'>
                        Personalized guidance from certified professionals
                     </p>
                  </div>
               </div>

               <div className='max-w-md mx-auto'>
                  <div className='bg-white/10 backdrop-blur-sm rounded-xl p-4'>
                     <p className='italic text-lg opacity-90 mb-4'>
                        "Joining GymOn was the best decision I've made for my
                        health. The trainers are amazing and the community is so
                        supportive!"
                     </p>
                     <p className='font-semibold'>
                        Sarah J. - Member since 2023
                     </p>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className='absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm'>
               &copy; {new Date().getFullYear()} GymOn Fitness. All rights
               reserved.
            </div>
         </div>

         {/* Right side - Auth form */}
         <div className='flex items-center justify-center p-6 md:p-8 lg:p-12'>
            <div className='w-full max-w-md'>
               <div className='mb-8'>
                  <Link href='/' className='inline-flex items-center mb-8'>
                     <svg
                        className='h-8 w-8 text-primary mr-2'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth={2}
                           d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                     </svg>
                     <span className='font-bold text-xl text-foreground'>
                        {logo.text}
                     </span>
                  </Link>

                  <h1 className='text-2xl font-bold'>{title}</h1>
                  <p className='text-muted-foreground mt-2'>{subtitle}</p>
               </div>

               {children}
            </div>
         </div>
      </div>
   );
}
