export interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  skills: string[];
  experience: string;
  postedDate: string;
  proposals: number;
}

export interface Freelancer {
  id: string;
  name: string;
  title: string;
  hourlyRate: number;
  rating: number;
  skills: string[];
  jobsCompleted: number;
  totalEarned: string;
}