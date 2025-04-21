import { AuthFormField, AuthPageData, SocialAuthProvider } from "@/types";

const socialProviders: SocialAuthProvider[] = [
   {
      id: "google",
      name: "Google",
      icon: "google",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-100",
   },
   {
      id: "facebook",
      name: "Facebook",
      icon: "facebook",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
   },
   {
      id: "apple",
      name: "Apple",
      icon: "apple",
      bgColor: "bg-black",
      hoverColor: "hover:bg-gray-900",
   },
];

const loginFormFields: AuthFormField[] = [
   {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
   },
   {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
   },
   {
      id: "rememberMe",
      label: "Remember me",
      type: "checkbox",
      required: false,
   },
];

const signupFormFields: AuthFormField[] = [
   {
      id: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "John",
      required: true,
   },
   {
      id: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Doe",
      required: true,
   },
   {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
   },
   {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Create a password",
      required: true,
   },
   {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password",
      required: true,
   },
   {
      id: "agreeToTerms",
      label: "I agree to the Terms of Service and Privacy Policy",
      type: "checkbox",
      required: true,
   },
];

export const loginPageData: AuthPageData = {
   title: "Welcome Back",
   subtitle: "Sign in to your account to continue your fitness journey",
   formFields: loginFormFields,
   submitButtonText: "Sign In",
   alternateAuthText: "Don't have an account?",
   alternateAuthLink: "/signup",
   alternateAuthLinkText: "Sign up",
   socialProviders,
};

export const signupPageData: AuthPageData = {
   title: "Create an Account",
   subtitle: "Join GymOn to start your fitness journey today",
   formFields: signupFormFields,
   submitButtonText: "Create Account",
   alternateAuthText: "Already have an account?",
   alternateAuthLink: "/login",
   alternateAuthLinkText: "Sign in",
   socialProviders,
};

export const getLoginPageData = () => loginPageData;
export const getSignupPageData = () => signupPageData;
