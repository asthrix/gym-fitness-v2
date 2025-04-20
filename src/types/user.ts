export interface User {
   id: string;
   name: string;
   email: string;
   role: "member" | "trainer" | "admin";
   membershipType?: MembershipType;
   profileImage?: string;
   joinedDate: Date;
   lastActive?: Date;
}

export interface MembershipType {
   id: string;
   name: string;
   duration: number; // in months
   price: number;
   features: string[];
   isPopular?: boolean;
}
