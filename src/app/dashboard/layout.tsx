"use client"

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { supabaseUrl, supabaseKey } from "@/lib/supabase.lib";
import React, { useEffect } from 'react';


export default function LayoutDashbord({ children }: any) {
    const router = usePathname()
    const changeRoute = useRouter()
    const supabase = createClientComponentClient({supabaseUrl, supabaseKey});

    useEffect(() => {
      const user = async () => {
        const {
          data: {user},
        } = await supabase.auth.getUser();
        if (!user) {
          changeRoute.replace('/login')
        }
      }
      user();
    }, [])


    const mapPathToHeading = (path: any) => {
        switch (path) {
            case '/dashboard/home':
                return 'Home';
            case '/dashboard/data-pengguna':
                return 'Data Pengguna';
            case '/dashboard/kelola-postingan':
                return 'Postingan';
            default:
                return 'Unknown Page';
        }
    }

    const labelHeading = mapPathToHeading(router)

    return (
        <>
            <Header />
            <Sidebar label={labelHeading}>
                {children}
            </Sidebar>
        </>
    )
}
