'use client'

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginTes = () => {
    router.push("/dashboard/home");
  }

  return (
    <form className="mt-4">
      <div className="mb-3">
        <input type="text" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="admin" />
      </div>
      <div className="mb-6">
        <input type="password" className="bg-gray-100 border border-gray-300 text-dark text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Password" />
      </div>
      <button onClick={handleLoginTes} type="button" className="bg-primary p-3.5 w-full text-white font-bold rounded-md">Login</button>
    </form>
  )
}
