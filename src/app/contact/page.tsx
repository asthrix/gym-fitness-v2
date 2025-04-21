"use client";

import { contactData } from "@/data";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Label } from "@/components/common/label";
import { Textarea } from "@/components/common/textarea";
import { useState } from "react";

export default function ContactPage() {
   const contactInfo = contactData.getContactInfo();
   const formFields = contactData.getContactFormFields();

   const [formData, setFormData] = useState<Record<string, string>>({});
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitSuccess, setSubmitSuccess] = useState(false);

   const handleInputChange = (
      e: React.ChangeEvent<
         HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
   ) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
         console.log("Form submitted:", formData);
         setIsSubmitting(false);
         setSubmitSuccess(true);
         setFormData({});

         // Reset success message after 5 seconds
         setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1000);
   };

   return (
      <div className='container mx-auto px-4 py-12'>
         <h1 className='mb-8 text-center text-3xl font-bold md:text-4xl'>
            Contact Us
         </h1>

         <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {/* Contact Form */}
            <div className='rounded-lg bg-white p-6 shadow-md lg:col-span-2'>
               <h2 className='mb-4 text-2xl font-semibold'>
                  Send Us a Message
               </h2>

               {submitSuccess ? (
                  <div className='rounded-md bg-green-50 p-4 text-green-700'>
                     <p className='font-medium'>Thank you for your message!</p>
                     <p className='mt-1'>
                        Our team will get back to you shortly.
                     </p>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className='space-y-4'>
                     {formFields.map((field) => (
                        <div key={field.id} className='space-y-2'>
                           <Label htmlFor={field.id}>{field.label}</Label>

                           {field.type === "textarea" ? (
                              <Textarea
                                 id={field.id}
                                 placeholder={field.placeholder}
                                 required={field.required}
                                 value={formData[field.id] || ""}
                                 onChange={handleInputChange}
                                 className='min-h-[120px] w-full'
                              />
                           ) : field.type === "select" ? (
                              <select
                                 id={field.id}
                                 required={field.required}
                                 value={formData[field.id] || ""}
                                 onChange={handleInputChange}
                                 className='w-full rounded-md border border-slate-200 px-3 py-2 focus:border-primary focus:outline-none'
                              >
                                 <option value=''>{field.placeholder}</option>
                                 {field.options?.map((option) => (
                                    <option key={option} value={option}>
                                       {option}
                                    </option>
                                 ))}
                              </select>
                           ) : (
                              <Input
                                 id={field.id}
                                 type={field.type}
                                 placeholder={field.placeholder}
                                 required={field.required}
                                 value={formData[field.id] || ""}
                                 onChange={handleInputChange}
                                 className='w-full'
                              />
                           )}
                        </div>
                     ))}

                     <Button
                        type='submit'
                        disabled={isSubmitting}
                        className='mt-6 w-full md:w-auto'
                     >
                        {isSubmitting ? "Sending..." : "Send Message"}
                     </Button>
                  </form>
               )}
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
               {/* Map */}
               <div className='overflow-hidden rounded-lg bg-gray-200'>
                  <div className='aspect-video w-full bg-gray-300 p-4 flex items-center justify-center text-gray-500'>
                     {/* This would be replaced with an actual map component */}
                     <p className='text-center'>Interactive Map</p>
                  </div>
               </div>

               {/* Contact Details */}
               <div className='rounded-lg bg-white p-6 shadow-md'>
                  <h2 className='mb-4 text-xl font-semibold'>Get in Touch</h2>

                  <div className='space-y-4'>
                     <div className='flex items-start'>
                        <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'></path>
                              <circle cx='12' cy='10' r='3'></circle>
                           </svg>
                        </div>
                        <div>
                           <h3 className='font-medium'>Address</h3>
                           <p className='text-slate-600'>
                              {contactInfo.address}
                           </p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                           </svg>
                        </div>
                        <div>
                           <h3 className='font-medium'>Phone</h3>
                           <p className='text-slate-600'>{contactInfo.phone}</p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                              <polyline points='22,6 12,13 2,6'></polyline>
                           </svg>
                        </div>
                        <div>
                           <h3 className='font-medium'>Email</h3>
                           <p className='text-slate-600'>{contactInfo.email}</p>
                        </div>
                     </div>

                     <div className='flex items-start'>
                        <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='20'
                              height='20'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                           >
                              <circle cx='12' cy='12' r='10'></circle>
                              <polyline points='12 6 12 12 16 14'></polyline>
                           </svg>
                        </div>
                        <div>
                           <h3 className='font-medium'>Hours</h3>
                           <div className='text-slate-600'>
                              {contactInfo.hours.map((item, index) => (
                                 <p key={index}>
                                    <span className='font-medium'>
                                       {item.days}:
                                    </span>{" "}
                                    {item.hours}
                                 </p>
                              ))}
                           </div>
                        </div>
                     </div>

                     {/* Social Media */}
                     <div className='mt-4 pt-4 border-t border-slate-200'>
                        <h3 className='mb-3 font-medium'>Follow Us</h3>
                        <div className='flex space-x-3'>
                           {contactInfo.socialMedia.map((social) => (
                              <a
                                 key={social.platform}
                                 href={social.url}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className='flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors'
                                 title={social.platform}
                              >
                                 {/* Using a simple placeholder for social icons */}
                                 <span className='sr-only'>
                                    {social.platform}
                                 </span>
                                 <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='18'
                                    height='18'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    stroke='currentColor'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                 >
                                    <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'></path>
                                 </svg>
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
