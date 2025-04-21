"use client";

import { useState } from "react";
import { faqData } from "@/data";
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from "@/components/common/accordion";
import {
   Tabs,
   TabsContent,
   TabsList,
   TabsTrigger,
} from "@/components/common/tabs";
import Link from "next/link";

export default function FAQPage() {
   const faqCategories = faqData.getFAQCategories();
   const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

   return (
      <div className='container mx-auto px-4 py-12'>
         <div className='mb-8 text-center'>
            <h1 className='mb-4 text-3xl font-bold md:text-4xl'>
               Frequently Asked Questions
            </h1>
            <p className='mx-auto max-w-2xl text-lg text-slate-600'>
               Find answers to common questions about our gym, memberships,
               classes, and more.
            </p>
         </div>

         <div className='mx-auto max-w-3xl'>
            <Tabs
               defaultValue={activeCategory}
               onValueChange={setActiveCategory}
               className='mb-8'
            >
               <TabsList className='grid w-full grid-cols-2 md:grid-cols-4'>
                  {faqCategories.map((category) => (
                     <TabsTrigger key={category.id} value={category.id}>
                        {category.name}
                     </TabsTrigger>
                  ))}
               </TabsList>

               {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                     <div className='mt-6'>
                        <Accordion type='single' collapsible className='w-full'>
                           {category.faqs.map((faq, index) => (
                              <AccordionItem key={faq.id} value={faq.id}>
                                 <AccordionTrigger className='text-left'>
                                    {faq.question}
                                 </AccordionTrigger>
                                 <AccordionContent>
                                    <p className='pt-2 text-slate-600'>
                                       {faq.answer}
                                    </p>
                                 </AccordionContent>
                              </AccordionItem>
                           ))}
                        </Accordion>
                     </div>
                  </TabsContent>
               ))}
            </Tabs>

            <div className='mt-12 rounded-lg bg-primary/5 p-6'>
               <h2 className='mb-3 text-xl font-semibold'>
                  Still have questions?
               </h2>
               <p className='mb-4 text-slate-700'>
                  Can't find the answer you're looking for? Please reach out to
                  our customer support team.
               </p>
               <div className='flex flex-wrap gap-3'>
                  <Link
                     href='/contact'
                     className='inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  >
                     Contact Us
                  </Link>
                  <a
                     href='tel:5551234567'
                     className='inline-flex items-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                  >
                     Call (555) 123-4567
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
