"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authData } from "@/data";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthForm } from "@/components/auth/AuthForm";
import { LoginFormData } from "@/types";

export default function LoginPage() {
   const router = useRouter();
   const [loading, setLoading] = useState(false);
   const loginPageData = authData.getLoginPageData();

   const handleLoginSubmit = (formData: Record<string, string | boolean>) => {
      setLoading(true);

      // This would be replaced with actual API call in a real application
      console.log("Login form submitted:", formData);

      // Simulate API call
      setTimeout(() => {
         setLoading(false);
         // Redirect to home page on successful login
         router.push("/");
      }, 1500);
   };

   return (
      <AuthLayout title={loginPageData.title} subtitle={loginPageData.subtitle}>
         <AuthForm
            formFields={loginPageData.formFields}
            socialProviders={loginPageData.socialProviders}
            submitButtonText={loginPageData.submitButtonText}
            onSubmit={handleLoginSubmit}
            alternateAuthText={loginPageData.alternateAuthText}
            alternateAuthLink={loginPageData.alternateAuthLink}
            alternateAuthLinkText={loginPageData.alternateAuthLinkText}
            loading={loading}
         />
      </AuthLayout>
   );
}
