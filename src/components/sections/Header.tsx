"use client";
import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/common/button";
import { navigationData } from "@/data";
import { NavCTA, NavItem } from "@/types";

export function Header() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const navigation = navigationData.getNavigationData();

   const toggleMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
   };

   // Navigation Item component for reuse
   const NavigationItem = ({
      item,
      onClick,
   }: {
      item: NavItem;
      onClick?: () => void;
   }) => (
      <li>
         <Link
            href={item.href}
            className={`text-slate-700 hover:text-primary ${
               item.className || ""
            }`}
            onClick={onClick}
         >
            {item.label}
         </Link>
      </li>
   );

   // CTA Button component for reuse
   const CTAButton = ({
      item,
      className = "",
   }: {
      item: NavCTA;
      className?: string;
   }) => (
      <Button variant={item.variant} className={className} asChild>
         <Link href={item.href}>{item.label}</Link>
      </Button>
   );

   return (
      <header className='sticky top-0 z-50 bg-white shadow-sm'>
         <div className='container mx-auto flex h-16 items-center justify-between px-4'>
            {/* Logo */}
            <Link
               href='/'
               className='flex items-center gap-2 font-bold text-xl'
            >
               <Dumbbell className='h-6 w-6' />
               <span>{navigation.logo.text}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:block'>
               <ul className='flex items-center gap-6'>
                  {navigation.menuItems.map((item) => (
                     <NavigationItem key={item.href} item={item} />
                  ))}
               </ul>
            </nav>

            {/* Call to Action Buttons */}
            <div className='hidden items-center gap-3 md:flex'>
               {navigation.ctaButtons.map((button) => (
                  <CTAButton key={button.href} item={button} />
               ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className='p-2 md:hidden'>
               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Mobile Navigation */}
         {mobileMenuOpen && (
            <nav className='border-t md:hidden'>
               <ul className='container mx-auto space-y-2 px-4 py-4'>
                  {navigation.menuItems.map((item) => (
                     <NavigationItem
                        key={item.href}
                        item={{ ...item, className: "block py-2" }}
                        onClick={toggleMenu}
                     />
                  ))}
                  <li className='flex gap-3 pt-2'>
                     {navigation.ctaButtons.map((button) => (
                        <CTAButton
                           key={button.href}
                           item={button}
                           className='flex-1'
                        />
                     ))}
                  </li>
               </ul>
            </nav>
         )}
      </header>
   );
}
