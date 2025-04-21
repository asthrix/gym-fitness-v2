"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Label } from "@/components/common/label";
import { AuthDivider } from "@/components/common/auth-divider";
import { SocialLoginButton } from "@/components/common/social-login-button";
import { PasswordInput } from "@/components/common/password-input";
import { AuthFormField, AuthError, SocialAuthProvider } from "@/types";
import Link from "next/link";

interface AuthFormProps {
   formFields: AuthFormField[];
   socialProviders: SocialAuthProvider[];
   submitButtonText: string;
   onSubmit: (formData: Record<string, string | boolean>) => void;
   alternateAuthText: string;
   alternateAuthLink: string;
   alternateAuthLinkText: string;
   loading?: boolean;
}

export function AuthForm({
   formFields,
   socialProviders,
   submitButtonText,
   onSubmit,
   alternateAuthText,
   alternateAuthLink,
   alternateAuthLinkText,
   loading = false,
}: AuthFormProps) {
   const [formData, setFormData] = useState<Record<string, string | boolean>>(
      {}
   );
   const [errors, setErrors] = useState<AuthError[]>([]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, checked } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: type === "checkbox" ? checked : value,
      }));

      // Clear field-specific error when value changes
      setErrors(errors.filter((error) => error.field !== name));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setErrors([]);

      // Basic validation
      const newErrors: AuthError[] = [];

      formFields.forEach((field) => {
         if (field.required && !formData[field.id]) {
            newErrors.push({
               field: field.id,
               message: `${field.label} is required`,
            });
         }

         // Email validation
         if (field.type === "email" && formData[field.id]) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData[field.id] as string)) {
               newErrors.push({
                  field: field.id,
                  message: "Please enter a valid email address",
               });
            }
         }
      });

      // Password matching for signup form
      if (
         formData.password &&
         formData.confirmPassword &&
         formData.password !== formData.confirmPassword
      ) {
         newErrors.push({
            field: "confirmPassword",
            message: "Passwords do not match",
         });
      }

      if (newErrors.length > 0) {
         setErrors(newErrors);
         return;
      }

      // Submit the form
      onSubmit(formData);
   };

   const getFieldError = (fieldId: string) => {
      return errors.find((error) => error.field === fieldId)?.message;
   };

   return (
      <div className='w-full space-y-6'>
         {/* Social login buttons */}
         <div className='grid grid-cols-1 gap-3'>
            {socialProviders.map((provider) => (
               <SocialLoginButton
                  key={provider.id}
                  provider={provider}
                  fullWidth
               />
            ))}
         </div>

         {/* Auth divider */}
         <AuthDivider />

         {/* Main form */}
         <form onSubmit={handleSubmit} className='space-y-4'>
            {formFields.map((field) => (
               <div key={field.id} className='space-y-2'>
                  <div className='flex justify-between'>
                     <Label htmlFor={field.id}>{field.label}</Label>

                     {/* For password fields, add a "Forgot Password" link */}
                     {field.id === "password" &&
                        alternateAuthLink === "/signup" && (
                           <Link
                              href='/forgot-password'
                              className='text-xs text-primary hover:underline'
                           >
                              Forgot password?
                           </Link>
                        )}
                  </div>

                  {field.type === "checkbox" ? (
                     <div className='flex items-center space-x-2'>
                        <Input
                           id={field.id}
                           name={field.id}
                           type='checkbox'
                           checked={!!formData[field.id]}
                           onChange={handleChange}
                           className='h-4 w-4'
                        />
                        <label
                           htmlFor={field.id}
                           className='text-sm text-muted-foreground'
                        >
                           {field.label}
                        </label>
                     </div>
                  ) : field.type === "password" ? (
                     <PasswordInput
                        id={field.id}
                        name={field.id}
                        placeholder={field.placeholder}
                        value={(formData[field.id] as string) || ""}
                        onChange={handleChange}
                        required={field.required}
                        className={
                           getFieldError(field.id) ? "border-destructive" : ""
                        }
                     />
                  ) : (
                     <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={(formData[field.id] as string) || ""}
                        onChange={handleChange}
                        required={field.required}
                        className={
                           getFieldError(field.id) ? "border-destructive" : ""
                        }
                     />
                  )}

                  {/* Field error message */}
                  {getFieldError(field.id) && (
                     <p className='text-xs text-destructive'>
                        {getFieldError(field.id)}
                     </p>
                  )}
               </div>
            ))}

            {/* General error message */}
            {errors.some((error) => !error.field) && (
               <div className='rounded-md bg-destructive/10 p-3'>
                  <p className='text-sm text-destructive'>
                     {errors.find((error) => !error.field)?.message}
                  </p>
               </div>
            )}

            <Button type='submit' className='w-full' disabled={loading}>
               {loading ? "Processing..." : submitButtonText}
            </Button>
         </form>

         {/* Alternative auth option */}
         <div className='text-center text-sm'>
            <p className='text-muted-foreground'>
               {alternateAuthText}{" "}
               <Link
                  href={alternateAuthLink}
                  className='text-primary hover:underline'
               >
                  {alternateAuthLinkText}
               </Link>
            </p>
         </div>
      </div>
   );
}
