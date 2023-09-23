"use client"

import CardDashboard from "@/components/card_dashboard"
import { ImUsers } from "react-icons/im"
import { supabase } from "@/lib/supabase.lib"
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"


const handleGetAdmin = async () => {

  let { data, error } = await supabase
    .from('Admin')
    .select('*')
    if (error) {
      console.log(error)
    } else 
    console.log(data)
}

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CardDashboard
        name="Data Pengguna"
        variant="blue"
        icon={<ImUsers size={20} />}
        count={120}
      />
      <CardDashboard
        name="Data Pengguna"
        variant="red"
        icon={<ImUsers size={20} />}
        count={23}
      />
      <CardDashboard
        name="Data Pengguna"
        variant="green"
        icon={<ImUsers size={20} />}
        count={78}
      />

      <button onClick={handleGetAdmin}>rafly</button>
    </div>
  )
}
