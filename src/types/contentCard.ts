import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface ContentCardRootProps {
   children: ReactNode;
   className?: string;
}

export interface ContentCardImageProps {
   src?: string | StaticImageData | null;
   alt: string;
   width?: number;
   height?: number;
   className?: string;
   overlay?: ReactNode;
}

export interface ContentCardHeaderProps {
   children: ReactNode;
   className?: string;
}

export interface ContentCardBodyProps {
   children: ReactNode;
   className?: string;
}

export interface ContentCardFooterProps {
   children: ReactNode;
   className?: string;
}
