"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authData } from "@/data";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthForm } from "@/components/auth/AuthForm";
import { SignupFormData } from "@/types";

export default function SignupPage() {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const signupPageData = authData.getSignupPageData();

   const handleSignupSubmit = (formData: Record<string, string | boolean>) => {
      setLoading(true);

      // This would be replaced with actual API call in a real application
      console.log("Signup form submitted:", formData);

      // Simulate API call
      setTimeout(() => {
         setLoading(false);
         // Redirect to home page or onboarding flow after successful signup
         router.push("/");
      }, 1500);
   };

   return (
      <AuthLayout
         title={signupPageData.title}
         subtitle={signupPageData.subtitle}
      >
         <AuthForm
            formFields={signupPageData.formFields}
            socialProviders={signupPageData.socialProviders}
            submitButtonText={signupPageData.submitButtonText}
            onSubmit={handleSignupSubmit}
            alternateAuthText={signupPageData.alternateAuthText}
            alternateAuthLink={signupPageData.alternateAuthLink}
            alternateAuthLinkText={signupPageData.alternateAuthLinkText}
            loading={loading}
         />
      </AuthLayout>
   );
}
