"use client"

import { useState, useEffect } from "react"
import TableComponent from "@/components/table"
import axios from "axios"

export default function DataPengguna() {
  const [tes, setTes] = useState([])

  const getData = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setTes(data.map((item:any) => item.title))
    } catch (error) {
      console.log(error)
    }
  }

  console.log(tes)

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <TableComponent
        heads={["Nama", "Alamat", "Email"]}
        bodies={[
          {
            Nama: tes,
            Alamat: "Jl. Contoh 123",
            Email: "zaki@gmail",
          },
          {
            Nama: tes,
            Alamat: "Jl. Contoh 123",
            Email: "zaki@gmail",
          },
        ]}
      />
    </div>
  )
}
