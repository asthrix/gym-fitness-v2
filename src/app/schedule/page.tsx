import { classesData } from "@/data";
import { Badge } from "@/components/common/badge";
import Link from "next/link";
import { FitnessClass, ClassSchedule } from "@/types";

export const metadata = {
   title: "Class Schedule - GymOn Fitness",
   description:
      "View our weekly schedule of fitness classes and plan your workout routine",
};

// Helper function to format time
const formatTime = (time: string) => {
   const [hour, minute] = time.split(":").map(Number);
   const period = hour >= 12 ? "PM" : "AM";
   const formattedHour = hour % 12 || 12;
   return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
};

export default function SchedulePage() {
   const allClasses = classesData.getClasses();

   // Days of the week
   const daysOfWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
   ];

   // Get classes by day and time
   const getClassesByDayAndTime = (
      day: string
   ): { class: FitnessClass; schedule: ClassSchedule }[] => {
      return allClasses
         .map((cls) => {
            const scheduleForDay = cls.schedule.filter((s) => s.day === day);
            return scheduleForDay.map((schedule) => ({ class: cls, schedule }));
         })
         .flat()
         .sort((a, b) => {
            const timeA = a.schedule.startTime;
            const timeB = b.schedule.startTime;
            return timeA.localeCompare(timeB);
         });
   };

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Weekly Class Schedule
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               Plan your workout routine with our comprehensive weekly schedule.
               Click on any class for more details and to sign up.
            </p>
         </div>

         <div className='mb-8 rounded-lg bg-primary/5 p-4 md:p-6'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
               <div>
                  <h2 className='text-xl font-semibold'>April 15-21, 2025</h2>
                  <p className='text-slate-600'>Weekly Schedule</p>
               </div>
               <div className='flex gap-3'>
                  <Badge variant='outline' className='bg-white'>
                     <span className='mr-1 h-2.5 w-2.5 rounded-full bg-green-500'></span>{" "}
                     Available
                  </Badge>
                  <Badge variant='outline' className='bg-white'>
                     <span className='mr-1 h-2.5 w-2.5 rounded-full bg-yellow-500'></span>{" "}
                     Almost Full
                  </Badge>
                  <Badge variant='outline' className='bg-white'>
                     <span className='mr-1 h-2.5 w-2.5 rounded-full bg-red-500'></span>{" "}
                     Full
                  </Badge>
               </div>
            </div>
         </div>

         <div className='mb-6 space-y-8'>
            {daysOfWeek.map((day) => {
               const classesForDay = getClassesByDayAndTime(day);

               if (classesForDay.length === 0) return null;

               return (
                  <div key={day} className='rounded-lg border'>
                     <div className='border-b bg-slate-50 px-6 py-4'>
                        <h2 className='text-xl font-semibold capitalize'>
                           {day}
                        </h2>
                     </div>

                     <div className='divide-y'>
                        {classesForDay.map(({ class: cls, schedule }) => {
                           const availabilityPercent =
                              (cls.currentAttendees / cls.capacity) * 100;
                           let availabilityColor = "bg-green-500";

                           if (availabilityPercent >= 100) {
                              availabilityColor = "bg-red-500";
                           } else if (availabilityPercent >= 70) {
                              availabilityColor = "bg-yellow-500";
                           }

                           return (
                              <Link
                                 href={`/classes/${cls.id}`}
                                 key={`${cls.id}-${schedule.startTime}-${day}`}
                                 className='flex flex-col p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between'
                              >
                                 <div className='mb-2 sm:mb-0'>
                                    <span className='text-sm font-medium text-slate-500'>
                                       {formatTime(schedule.startTime)} -{" "}
                                       {formatTime(schedule.endTime)}
                                    </span>
                                    <h3 className='font-medium'>{cls.name}</h3>
                                    <p className='text-sm text-slate-600'>
                                       with {cls.trainer.name}
                                    </p>
                                 </div>

                                 <div className='flex items-center gap-4'>
                                    <Badge variant='outline'>
                                       {cls.level.charAt(0).toUpperCase() +
                                          cls.level.slice(1)}
                                    </Badge>
                                    <div className='flex items-center gap-1.5'>
                                       <span
                                          className={`h-2.5 w-2.5 rounded-full ${availabilityColor}`}
                                       ></span>
                                       <span className='text-sm text-slate-600'>
                                          {cls.currentAttendees}/{cls.capacity}
                                       </span>
                                    </div>
                                 </div>
                              </Link>
                           );
                        })}
                     </div>
                  </div>
               );
            })}
         </div>

         <div className='rounded-lg bg-slate-50 p-6 text-center'>
            <h3 className='mb-3 text-lg font-semibold'>
               Looking for Something Specific?
            </h3>
            <p className='mb-4 text-slate-600'>
               Check out our complete class catalog or filter by your preferred
               workout type.
            </p>
            <Link href='/classes' className='text-primary hover:underline'>
               View All Classes
            </Link>
         </div>
      </div>
   );
}
