"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function DropDownAccount() {
    const [openDropDown, setOpenDropDown] = useState(false)
    return (
        <div onClick={() => setOpenDropDown(!openDropDown)} className="relative cursor-pointer flex items-center gap-x-3">
            <h3 className="text-lg font-medium">Admin</h3>
            <Image
                src="/../../assets/user-admin.svg"
                width={45}
                height={45}
                alt="avatar icon"
                priority
            />
            <ul className={`absolute z-50 ${openDropDown ? "block" : "hidden"} right-0 top-12 mt-2 py-2 bg-white border border-gray-300 rounded-md shadow-lg w-full`}>
                <li>
                    <Link href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Setting</Link>
                </li>
                <li>
                    <Link href="/auth/login" className="block px-4 py-2 text-red-500 hover:bg-gray-100">Logout</Link>
                </li>
            </ul>
        </div>
    )
}