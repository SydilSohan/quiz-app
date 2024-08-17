import { Enums } from './supabase';

export type FormValues = {
  name: string;
  short: string;
  long: string;
  start: {
    lat: number;
    lng: number;
    address: string;
  };
  end: {
    lat: number;
    lng: number;
    address: string;
  };
  stops: Array<{
    lat: number;
    lng: number;
    address: string;
  }>;
};

export type BarsData = {
  name: string;
  exam_prep: string;
  short: string;
  long: string;
  beer_type: string[];
  address: {
    lat: number;
    lng: number;
    address: string;
  };
  image: string;
};

export type Params = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export type Results = {
  questionId: string;
  answer: string;
  isCorrect: boolean;
  name: string;
   correctAnswer  : null | string
};

export type SupabaseUser = {
  age: number | null;
  avatar: string | null;
  display: string | null;
  email: string | null;
  first_name: string | null;
  id: string;
  last_name: string | null;
  meta_data: {
    iss?: string;
    sub?: string;
    name?: string;
    email?: string;
    avatar?: string;
    picture?: string;
    full_name?: string;
    last_name?: string;
    avatar_url?: string;
    first_name?: string;
    provider_id?: string;
    email_verified?: boolean;
    phone_verified?: boolean;
  };
  picture: string | null;
  providers: string[] | null;
  userName: string | null;
};
export type TablesEnum = "profiles" | "quizzes" | 'submissions' 
export type TableCommonReturn =  {
    id: number;
    name: string;
  }[] | null;
