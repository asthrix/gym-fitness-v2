import { StaticImageData } from "next/image";

export interface FitnessClass {
   id: string;
   name: string;
   description: string;
   trainer: Trainer;
   duration: number; // in minutes
   capacity: number;
   currentAttendees: number;
   schedule: ClassSchedule[];
   level: "beginner" | "intermediate" | "advanced";
   category: string[];
   image?: string | StaticImageData;
}

export interface Trainer {
   id: string;
   name: string;
   bio: string;
   specialties: string[];
   experience: number; // in years
   profileImage?: string | StaticImageData;
   rating?: number;
   classes?: string[]; // IDs of classes they teach
}

export interface ClassSchedule {
   day:
      | "monday"
      | "tuesday"
      | "wednesday"
      | "thursday"
      | "friday"
      | "saturday"
      | "sunday";
   startTime: string; // Format: "HH:MM"
   endTime: string; // Format: "HH:MM"
}
