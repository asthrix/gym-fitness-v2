import { FitnessClass } from "@/types";
import { getTrainerById } from "./mockTrainers";
import { Images } from "@/assets/images";

export const fitnessClasses: FitnessClass[] = [
   {
      id: "1",
      name: "Power Lifting Fundamentals",
      description:
         "Master the basics of powerlifting with proper form and technique guidance for beginners to advanced lifters.",
      trainer: getTrainerById("1")!,
      duration: 60,
      capacity: 10,
      currentAttendees: 6,
      schedule: [
         { day: "monday", startTime: "08:00", endTime: "09:00" },
         { day: "wednesday", startTime: "08:00", endTime: "09:00" },
         { day: "friday", startTime: "08:00", endTime: "09:00" },
      ],
      level: "intermediate",
      category: ["Strength", "Weightlifting"],
      image: Images.classes.powerLifting,
   },
   {
      id: "2",
      name: "Vinyasa Flow Yoga",
      description:
         "A dynamic practice that connects breath to movement, building strength, flexibility, and mental focus.",
      trainer: getTrainerById("2")!,
      duration: 75,
      capacity: 20,
      currentAttendees: 15,
      schedule: [
         { day: "tuesday", startTime: "17:30", endTime: "18:45" },
         { day: "thursday", startTime: "17:30", endTime: "18:45" },
         { day: "saturday", startTime: "09:00", endTime: "10:15" },
      ],
      level: "beginner",
      category: ["Mind-Body", "Flexibility"],
      image: Images.classes.yoga,
   },
   {
      id: "3",
      name: "High-Intensity Interval Training",
      description:
         "Maximize calorie burn and boost metabolism with this intense full-body workout combining cardio and strength exercises.",
      trainer: getTrainerById("1")!,
      duration: 45,
      capacity: 15,
      currentAttendees: 12,
      schedule: [
         { day: "monday", startTime: "18:00", endTime: "18:45" },
         { day: "wednesday", startTime: "18:00", endTime: "18:45" },
         { day: "friday", startTime: "18:00", endTime: "18:45" },
      ],
      level: "advanced",
      category: ["Cardio", "HIIT", "Weight Loss"],
      image: Images.classes.hiit,
   },
   {
      id: "4",
      name: "Pilates Core Strength",
      description:
         "Build a strong foundation with this core-focused class that improves posture, balance, and overall body strength.",
      trainer: getTrainerById("2")!,
      duration: 60,
      capacity: 12,
      currentAttendees: 8,
      schedule: [
         { day: "tuesday", startTime: "09:30", endTime: "10:30" },
         { day: "thursday", startTime: "09:30", endTime: "10:30" },
      ],
      level: "intermediate",
      category: ["Mind-Body", "Core", "Conditioning"],
      image: Images.classes.pilates,
   },
   {
      id: "5",
      name: "CrossFit WOD",
      description:
         "Challenge yourself with our daily workout featuring varied functional movements performed at high intensity.",
      trainer: getTrainerById("3")!,
      duration: 60,
      capacity: 12,
      currentAttendees: 10,
      schedule: [
         { day: "monday", startTime: "06:00", endTime: "07:00" },
         { day: "tuesday", startTime: "06:00", endTime: "07:00" },
         { day: "wednesday", startTime: "06:00", endTime: "07:00" },
         { day: "thursday", startTime: "06:00", endTime: "07:00" },
         { day: "friday", startTime: "06:00", endTime: "07:00" },
      ],
      level: "advanced",
      category: ["CrossFit", "Functional Fitness"],
      image: Images.classes.crossfit,
   },
];

export const getClasses = () => fitnessClasses;

export const getClassById = (id: string): FitnessClass | undefined => {
   return fitnessClasses.find((cls) => cls.id === id);
};

export const getClassesByTrainer = (trainerId: string): FitnessClass[] => {
   return fitnessClasses.filter((cls) => cls.trainer.id === trainerId);
};

export const getClassesByCategory = (category: string): FitnessClass[] => {
   return fitnessClasses.filter((cls) => cls.category.includes(category));
};
