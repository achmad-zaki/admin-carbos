"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumb from "../breadcrumb";
import { Navigation } from "./menu";

interface SidebarProps {
    label: string;
    children: any;
}

export default function Sidebar(props: SidebarProps) {
    const {
        children,
        label
    } = props

    const router = usePathname()

    return (
        <div className='flex h-full'>
            <aside className="fixed z-50 w-20 md:w-56 h-full p-3 bg-white border-r-[1px] flex flex-col justify-between transition-all duration-300">
                <div className='flex flex-col items-center'>
                    <h1 className="text-3xl font-medium md:hidden">Car</h1>
                    <h1 className="text-3xl font-medium hidden md:block">Carbos</h1>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <div className="mt-5 w-full flex flex-col gap-y-2">
                        {Navigation.map((item, index) => (
                            <Link key={index} href={item.path} className={`${router === item.path ? "bg-primary text-white" : "text-dark"} p-3 rounded-md flex justify-center md:justify-start items-center gap-x-3 hover:bg-primary hover:text-white transition duration-300`}>
                                {item.icon}
                                <span className="hidden md:block font-medium grow">{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
            <main className='bg-[#F5F6F9] ml-20 md:ml-56 w-full pt-24 pb-5 px-5 min-h-screen overflow-hidden'>
                <Breadcrumb label={label} />
                {children}
            </main>
        </div>
    )
}
