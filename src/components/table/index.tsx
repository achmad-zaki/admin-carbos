interface TableProps {
    heads: string[]
    bodies: any[]
}

export default function TableComponent({ heads, bodies }: TableProps) {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {heads.map((head, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {head}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {bodies.map((body, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {heads.map((head, index) => (
                                <td key={index} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {body[head]}
                                </td>
                            ))}
                            <td>Lihat</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}