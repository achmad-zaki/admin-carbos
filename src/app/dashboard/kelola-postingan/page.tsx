"use client"

import TableComponent from "@/components/table"

export default function KelolaPostingan() {
  return (
    <div>
      <TableComponent 
        heads={[
          "Judul", "Kategori", "Konten",
        ]}
        bodies={[
          {
            Judul: "Judul 1",
            Kategori: "Kategori 1",
            Konten: "Konten 1",
          }
        ]}
      />
    </div>
  )
}
