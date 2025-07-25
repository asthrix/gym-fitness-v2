"use client";

import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   provider: {
      id: string;
      name: string;
      bgColor: string;
      hoverColor: string;
   };
   iconClassName?: string;
   fullWidth?: boolean;
}

export function SocialLoginButton({
   provider,
   iconClassName,
   fullWidth = false,
   className,
   ...props
}: SocialLoginButtonProps) {
   const getIconComponent = () => {
      switch (provider.id.toLowerCase()) {
         case "google":
            return (
               <svg
                  className={iconClassName}
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
               >
                  <path
                     d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                     fill='#4285F4'
                  />
                  <path
                     d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                     fill='#34A853'
                  />
                  <path
                     d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                     fill='#FBBC05'
                  />
                  <path
                     d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                     fill='#EA4335'
                  />
               </svg>
            );
         case "facebook":
            return (
               <svg
                  className={iconClassName}
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
               >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
               </svg>
            );
         case "apple":
            return (
               <svg
                  className={iconClassName}
                  xmlns='http://www.w3.org/2000/svg'
                  width='18'
                  height='18'
                  viewBox='0 0 24 24'
                  fill='currentColor'
               >
                  <path d='M16.498 0c.554 2.659-.46 5.467-2.392 7.414-1.825 1.756-4.533 3.225-7.421 3.039-.575-2.554.436-5.359 2.253-7.234 1.924-1.987 4.698-3.284 7.56-3.219zm3.02 10.219c-1.803-.137-3.338 1.037-4.447 1.037-1.151 0-2.842-1-4.843-.956-2.471.045-4.834 1.527-6.105 3.752-2.672 4.676-.683 11.544 1.854 15.334 1.288 1.846 2.735 3.864 4.648 3.792 1.899-.087 2.575-1.173 4.862-1.173 2.252 0 2.949 1.173 4.902 1.122 2.046-.051 3.305-1.802 4.502-3.681.932-1.342 1.603-2.862 2.078-4.452-2.357-1.021-3.928-3.037-3.928-5.331-.004-2.899 1.717-5.29 4.477-6.444z' />
               </svg>
            );
         default:
            return null;
      }
   };

   return (
      <Button
         type='button'
         variant='outline'
         className={cn(
            "flex items-center gap-2 text-sm font-medium",
            provider.bgColor,
            provider.id === "google"
               ? "text-gray-700 border-gray-300"
               : "text-white",
            provider.hoverColor,
            fullWidth && "w-full justify-center",
            className
         )}
         {...props}
      >
         {getIconComponent()}
         <span>
            {provider.name === "Apple"
               ? "Sign in with Apple"
               : `Continue with ${provider.name}`}
         </span>
      </Button>
   );
}
