import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface User {
  name: string;
  avatar: string;
  level: string;
  joinDate: string;
  stats: {
    bookings: number;
    plans: number;
    reviews: number;
  };
}

export interface ItineraryItem {
  id: string;
  type: 'pickup' | 'sightseeing' | 'meal' | 'hotel';
  title: string;
  time: string;
  location: string;
  status?: string;
  code?: string;
  image?: string;
  rating?: number;
}

export interface Recommendation {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  matchRate: number;
  image: string;
  type: 'spot' | 'restaurant' | 'hotel';
}
