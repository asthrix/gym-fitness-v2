export interface AuthFormField {
   id: string;
   label: string;
   type: "text" | "email" | "password" | "checkbox";
   placeholder?: string;
   required: boolean;
}

export interface SignupFormData {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
   confirmPassword: string;
   agreeToTerms: boolean;
}

export interface LoginFormData {
   email: string;
   password: string;
   rememberMe: boolean;
}

export interface AuthError {
   field?: string; // Optional field name if error is field-specific
   message: string;
}

export interface SocialAuthProvider {
   id: string;
   name: string;
   icon: string;
   bgColor: string;
   hoverColor: string;
}

export interface AuthPageData {
   title: string;
   subtitle: string;
   formFields: AuthFormField[];
   submitButtonText: string;
   alternateAuthText: string;
   alternateAuthLink: string;
   alternateAuthLinkText: string;
   socialProviders: SocialAuthProvider[];
}
