"use client";

import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface PasswordInputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {
   className?: string;
}

export function PasswordInput({ className, ...props }: PasswordInputProps) {
   const [showPassword, setShowPassword] = React.useState(false);

   return (
      <div className='relative'>
         <Input
            type={showPassword ? "text" : "password"}
            className={cn("pr-10", className)}
            {...props}
         />
         <Button
            type='button'
            variant='ghost'
            size='icon'
            className='absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground hover:text-foreground'
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
         >
            <span className='sr-only'>
               {showPassword ? "Hide password" : "Show password"}
            </span>
            {showPassword ? (
               <EyeOffIcon className='h-4 w-4' />
            ) : (
               <EyeIcon className='h-4 w-4' />
            )}
         </Button>
      </div>
   );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         {...props}
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
         <path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z' />
         <circle cx='12' cy='12' r='3' />
      </svg>
   );
}

function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         {...props}
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
         <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
         <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
         <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
         <line x1='2' x2='22' y1='2' y2='22' />
      </svg>
   );
}
