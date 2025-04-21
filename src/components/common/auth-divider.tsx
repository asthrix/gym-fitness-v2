"use client";

import { cn } from "@/lib/utils";
import { Separator } from "./separator";

interface AuthDividerProps {
   className?: string;
}

export function AuthDivider({ className }: AuthDividerProps) {
   return (
      <div className={cn("relative my-6", className)}>
         <div className='absolute inset-0 flex items-center'>
            <Separator className='w-full' />
         </div>
         <div className='relative flex justify-center'>
            <span className='bg-background px-4 text-xs uppercase text-muted-foreground'>
               or continue with
            </span>
         </div>
      </div>
   );
}
