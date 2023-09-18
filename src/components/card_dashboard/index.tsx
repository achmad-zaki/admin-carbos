interface CardDashboardProps {
    name: string;
    icon: React.ReactNode;
    count: number;
    variant: "blue" | "green" | "red";
}

export default function CardDashboard(props: CardDashboardProps) {
    const {
        name,
        icon,
        count,
        variant
    } = props

    const cardColor = {
        blue: 'bg-primary text-white',
        green: 'bg-green-600 text-white',
        red: 'bg-red-600 text-white',
    }

    return (
        <div className="bg-white rounded-md w-full">
            <div className="p-4 text-dark">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{name}</h3>
                    <div className={`${cardColor[variant]} rounded-md p-2`}>
                        {icon}
                    </div>
                </div>
                <h5 className="text-lg font-medium">{count}</h5>
            </div>
        </div>
    )
}
