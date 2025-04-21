import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
} from "@/components/common/card";
import {
   ContentCardBodyProps,
   ContentCardFooterProps,
   ContentCardHeaderProps,
   ContentCardImageProps,
   ContentCardRootProps,
} from "@/types";
import Image from "next/image";

export function ContentCardRoot({
   children,
   className = "",
}: ContentCardRootProps) {
   return (
      <Card
         className={`overflow-hidden justify-between transition-all hover:shadow-lg pt-0 gap-3 ${className}`}
      >
         {children}
      </Card>
   );
}

export function ContentCardImage({
   src,
   alt,
   width = 400,
   height = 400,
   className = "",
   overlay,
}: ContentCardImageProps) {
   return (
      <div className='relative w-full overflow-hidden rounded-xl p-4 pb-1'>
         {src ? (
            <div className=''>
               <Image
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className={`object-cover transition-transform duration-300 rounded-xl hover:scale-[1.02] ${className}`}
               />
               {overlay && (
                  <div className='absolute right-1 top-1'>{overlay}</div>
               )}
            </div>
         ) : (
            <div className='flex h-[200px] w-full items-center justify-center bg-slate-100 rounded-xl'>
               <span className='text-sm text-slate-500'>
                  No image available
               </span>
            </div>
         )}
      </div>
   );
}

export function ContentCardHeader({
   children,
   className = "",
}: ContentCardHeaderProps) {
   return <CardHeader className={`pb-2 ${className}`}>{children}</CardHeader>;
}

export function ContentCardBody({
   children,
   className = "",
}: ContentCardBodyProps) {
   return <CardContent className={`pb-2 ${className}`}>{children}</CardContent>;
}

export function ContentCardFooter({
   children,
   className = "",
}: ContentCardFooterProps) {
   return <CardFooter className={className}>{children}</CardFooter>;
}

export const ContentCard = {
   Root: ContentCardRoot,
   Image: ContentCardImage,
   Header: ContentCardHeader,
   Body: ContentCardBody,
   Footer: ContentCardFooter,
};
