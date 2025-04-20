import Link from "next/link";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
   return (
      <footer className='bg-slate-900 text-slate-200'>
         <div className='container mx-auto px-4 py-12'>
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
               {/* Brand */}
               <div>
                  <Link
                     href='/'
                     className='flex items-center gap-2 font-bold text-xl text-white'
                  >
                     <Dumbbell className='h-6 w-6' />
                     <span>GymOn</span>
                  </Link>
                  <p className='mt-4 text-slate-300'>
                     Empowering you to reach your fitness goals with expert
                     trainers and state-of-the-art facilities.
                  </p>
                  <div className='mt-6 flex space-x-4'>
                     <a href='#' className='hover:text-white'>
                        <Facebook size={20} />
                     </a>
                     <a href='#' className='hover:text-white'>
                        <Twitter size={20} />
                     </a>
                     <a href='#' className='hover:text-white'>
                        <Instagram size={20} />
                     </a>
                     <a href='#' className='hover:text-white'>
                        <Youtube size={20} />
                     </a>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                     Quick Links
                  </h3>
                  <ul className='space-y-2'>
                     <li>
                        <Link href='/classes' className='hover:text-white'>
                           Classes
                        </Link>
                     </li>
                     <li>
                        <Link href='/trainers' className='hover:text-white'>
                           Trainers
                        </Link>
                     </li>
                     <li>
                        <Link href='/membership' className='hover:text-white'>
                           Membership
                        </Link>
                     </li>
                     <li>
                        <Link href='/schedule' className='hover:text-white'>
                           Schedule
                        </Link>
                     </li>
                     <li>
                        <Link href='/about' className='hover:text-white'>
                           About Us
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                     Contact
                  </h3>
                  <ul className='space-y-2'>
                     <li>123 Fitness Street</li>
                     <li>New York, NY 10001</li>
                     <li>+1 (555) 123-4567</li>
                     <li>info@gymon.com</li>
                  </ul>
               </div>

               {/* Hours */}
               <div>
                  <h3 className='mb-4 text-lg font-semibold text-white'>
                     Hours
                  </h3>
                  <ul className='space-y-2'>
                     <li>
                        <span className='font-medium'>Weekdays:</span> 5:00 AM -
                        10:00 PM
                     </li>
                     <li>
                        <span className='font-medium'>Saturday:</span> 7:00 AM -
                        8:00 PM
                     </li>
                     <li>
                        <span className='font-medium'>Sunday:</span> 8:00 AM -
                        6:00 PM
                     </li>
                     <li>
                        <span className='font-medium'>Holidays:</span> 8:00 AM -
                        4:00 PM
                     </li>
                  </ul>
               </div>
            </div>

            <div className='mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400'>
               <p>© {new Date().getFullYear()} GymOn. All rights reserved.</p>
               <p className='mt-2'>
                  <Link href='/privacy' className='mr-4 hover:text-slate-300'>
                     Privacy Policy
                  </Link>
                  <Link href='/terms' className='hover:text-slate-300'>
                     Terms of Service
                  </Link>
               </p>
            </div>
         </div>
      </footer>
   );
}
