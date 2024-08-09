import { useState, useEffect, useTransition } from 'react';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { Tables } from '@/types/supabase';
import { useRouter } from 'next/navigation';

const useGetUser = ({getProfile = false} : {
  getProfile?: boolean
}) : {
  user : User | null | undefined;
  loading : boolean;
  saved : number[];
  profile : Tables<'profiles'> | undefined | null
} => {
  const [user, setUser] = useState<User | null>(null);
  const [authEvent, setAuthEvent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Tables<'profiles'>>()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const supabase = createClient();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setLoading(true);

        console.log(event, session);
        setAuthEvent(event);
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
          // setUser(session?.user);
        } else if (event === 'SIGNED_OUT') {
          // setUser(undefined);
        }

        setLoading(false);
      }
    );

    // Clean up the auth state change listener when the component unmounts
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  useEffect(() => {
     const fetchProfile = async () =>{
      setLoading(true)
      const {data, error} = await supabase.from("profiles").select("*").single()
      if (!error)  setProfile(data) 
      setLoading(false)
   
    }
    const fetchUser = async () => {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
      setLoading(false);
      router.refresh()
    }
   
    if (user) return
    fetchUser()
    if (getProfile) fetchProfile()
  }, [authEvent]);

  return { user, loading, saved : user?.user_metadata.saved , profile : profile};
};

export default useGetUser;
