"use client"

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";

export default function LayoutDashbord({ children }: any) {
    const router = usePathname()

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
