'use client'

import { redirect, usePathname, useRouter } from "next/navigation";
import { supabaseUrl, supabaseKey } from "@/lib/supabase.lib";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers'
import { useEffect, useState } from "react";
import { Database } from "@/types/supabase";


export default function LoginPage() {
  const router = useRouter();
  const supabase = createClientComponentClient({ supabaseUrl, supabaseKey });
  useEffect (() => {
    const user = async () => {
      const {
        data: {user},
      } = await supabase.auth.getUser();
      user && router.replace('/dashboard/home');
    };
    user();
  }, [])

  return (
    <form className="mt-4" action="/auth/sign-in" method="POST">
      <div className="mb-3">
        <input type="text" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="admin" name="username" />
      </div>
      <div className="mb-6">
        <input type="password" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" name="password" />
      </div>
      <button className="bg-primary p-3.5 w-full text-white font-bold rounded-md">Login</button>
    </form>
  )
}
