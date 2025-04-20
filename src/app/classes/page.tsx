import { classesData } from "@/data";
import { ClassCard } from "@/components/widgets/ClassCard";
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/common/tabs";

export const metadata = {
   title: "Classes - GymOn Fitness",
   description:
      "Browse our wide range of fitness classes for all experience levels",
};

export default function ClassesPage() {
   const allClasses = classesData.getClasses();

   // Get unique categories
   const categories = [...new Set(allClasses.flatMap((c) => c.category))];

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Our Fitness Classes
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               From high-intensity training to mindful movement, we offer a
               variety of classes for all fitness levels.
            </p>
         </div>

         <Tabs defaultValue='all' className='mb-12'>
            <TabsList className='mx-auto'>
               <TabsTrigger value='all'>All Classes</TabsTrigger>
               {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                     {category}
                  </TabsTrigger>
               ))}
            </TabsList>
            <TabsContent value='all' className='mt-6'>
               <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                  {allClasses.map((fitnessClass) => (
                     <ClassCard
                        key={fitnessClass.id}
                        fitnessClass={fitnessClass}
                     />
                  ))}
               </div>
            </TabsContent>

            {categories.map((category) => (
               <TabsContent key={category} value={category} className='mt-6'>
                  <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                     {classesData
                        .getClassesByCategory(category)
                        .map((fitnessClass) => (
                           <ClassCard
                              key={fitnessClass.id}
                              fitnessClass={fitnessClass}
                           />
                        ))}
                  </div>
               </TabsContent>
            ))}
         </Tabs>
      </div>
   );
}
