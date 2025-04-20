import { Trainer } from "@/types";
import { Images } from "@/assets/images";

export const trainers: Trainer[] = [
   {
      id: "1",
      name: "John Smith",
      bio: "Former professional athlete with over 10 years of personal training experience specializing in strength and conditioning.",
      specialties: ["Strength Training", "HIIT", "Sports Performance"],
      experience: 10,
      profileImage: Images.trainers.john,
      rating: 4.9,
      classes: ["1", "3", "7"],
   },
   {
      id: "2",
      name: "Emma Wilson",
      bio: "Dance fitness expert with background in professional dance, specializing in high-energy group classes.",
      specialties: ["Zumba", "Dance Fitness", "Cardio"],
      experience: 6,
      profileImage: Images.trainers.emma,
      rating: 4.9,
      classes: ["10", "11", "12"],
   },
   {
      id: "3",
      name: "Michael Rodriguez",
      bio: "CrossFit champion and mobility specialist focusing on functional fitness and injury prevention.",
      specialties: ["CrossFit", "Mobility", "Functional Training"],
      experience: 8,
      profileImage: Images.trainers.michael,
      rating: 4.7,
      classes: ["5", "6", "8"],
   },
   {
      id: "4",
      name: "Sarah Johnson",
      bio: "Certified yoga instructor and fitness nutritionist passionate about holistic wellness and mindful movement.",
      specialties: ["Yoga", "Pilates", "Nutrition Coaching"],
      experience: 7,
      profileImage: Images.trainers.sarah,
      rating: 4.8,
      classes: ["2", "4", "9"],
   },
];

export const getTrainers = () => trainers;

export const getTrainerById = (id: string): Trainer | undefined => {
   return trainers.find((trainer) => trainer.id === id);
};
