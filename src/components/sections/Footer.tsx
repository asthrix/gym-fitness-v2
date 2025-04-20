import Link from "next/link";
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { footerData } from "@/data";
import { FooterLink, FooterHours, FooterSocialLink } from "@/types/footer";

export function Footer() {
   const content = footerData.getFooterContent();

   // Get the appropriate icon component
   const getIconComponent = (iconName: string, size: number = 22) => {
      switch (iconName) {
         case "Dumbbell":
            return <Dumbbell size={size} />;
         case "Facebook":
            return <Facebook size={size} />;
         case "Twitter":
            return <Twitter size={size} />;
         case "Instagram":
            return <Instagram size={size} />;
         case "Youtube":
            return <Youtube size={size} />;
         default:
            return null;
      }
   };

   // Format copyright text with current year
   const getCopyrightText = () => {
      return content.legal.copyright.replace(
         "{year}",
         new Date().getFullYear().toString()
      );
   };

   // Reusable components for DRY implementation
   const FooterSection = ({
      title,
      children,
   }: {
      title: string;
      children: React.ReactNode;
   }) => (
      <div>
         <h3 className='mb-4 text-lg font-semibold text-white'>{title}</h3>
         {children}
      </div>
   );

   const SocialLinks = ({ links }: { links: FooterSocialLink[] }) => (
      <div className='mt-6 flex space-x-4'>
         {links.map((link) => (
            <Link
               key={link.name}
               href={link.url}
               className='hover:text-primary hover:-translate-y-1 transition-all duration-300'
               aria-label={link.name}
            >
               {getIconComponent(link.icon)}
            </Link>
         ))}
      </div>
   );

   const QuickLinks = ({ links }: { links: FooterLink[] }) => (
      <ul className='space-y-2'>
         {links.map((link) => (
            <li key={link.href}>
               <Link
                  href={link.href}
                  className='hover:text-primary transition-colors duration-200'
               >
                  {link.label}
               </Link>
            </li>
         ))}
      </ul>
   );

   const ContactInfo = ({ address, phone, email }: typeof content.contact) => (
      <ul className='space-y-2'>
         {address.map((line, index) => (
            <li key={index}>{line}</li>
         ))}
         <li>{phone}</li>
         <li>{email}</li>
      </ul>
   );

   const BusinessHours = ({ hours }: { hours: FooterHours[] }) => (
      <ul className='space-y-2'>
         {hours.map((item, index) => (
            <li key={index}>
               <span className='font-medium'>{item.day}:</span> {item.hours}
            </li>
         ))}
      </ul>
   );

   return (
      <footer className='bg-slate-900 text-slate-200'>
         <div className='container mx-auto px-4 py-12'>
            <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-4'>
               {/* Brand */}
               <div>
                  <Link
                     href='/'
                     className='flex items-center gap-2 font-bold text-xl text-white'
                  >
                     {getIconComponent(content.brand.icon, 24)}
                     <span>{content.brand.name}</span>
                  </Link>
                  <p className='mt-4 text-slate-300'>
                     {content.brand.description}
                  </p>
                  <SocialLinks links={content.brand.socialLinks} />
               </div>

               {/* Quick Links */}
               <FooterSection title='Quick Links'>
                  <QuickLinks links={content.quickLinks} />
               </FooterSection>

               {/* Contact */}
               <FooterSection title='Contact'>
                  <ContactInfo {...content.contact} />
               </FooterSection>

               {/* Hours */}
               <FooterSection title='Hours'>
                  <BusinessHours hours={content.hours} />
               </FooterSection>
            </div>

            <div className='mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-400'>
               <p>{getCopyrightText()}</p>
               <p className='mt-2'>
                  {content.legal.links.map((link, index) => (
                     <span key={link.href}>
                        <Link href={link.href} className='hover:text-slate-300'>
                           {link.label}
                        </Link>
                        {index < content.legal.links.length - 1 && (
                           <span className='mx-4'>·</span>
                        )}
                     </span>
                  ))}
               </p>
            </div>
         </div>
      </footer>
   );
}
