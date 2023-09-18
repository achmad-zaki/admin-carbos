import { FaUsersGear } from "react-icons/fa6"
import { BiSolidHome } from "react-icons/bi"
import { FaTelegramPlane } from "react-icons/fa"

export const Navigation = [
    {
        name: "Home",
        path: "/dashboard/home",
        icon: <BiSolidHome size={20} />
    },
    {
        name: "Data Pengguna",
        path: "/dashboard/data-pengguna",
        icon: <FaUsersGear size={20} />
    },
    {
        name: "Postingan",
        path: "/dashboard/kelola-postingan",
        icon: <FaTelegramPlane size={20} />
    },
]