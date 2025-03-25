import { useState } from "react";

interface Direction {
    content: string;
    icon: string;
    is_blue: boolean;
}

export default function Directions() {
    const [directions] = useState<Direction[]>([
        {
            content: "механический монтаж технологического оборудования",
            icon: "/1.png",
            is_blue: false,
        },
        {
            content: "электрический монтаж технологического оборудования",
            icon: "/2.png",
            is_blue: true,
        },
        {
            content: "монтаж технологических трубопроводов и металлоконструкций",
            icon: "/3.png",
            is_blue: false,
        },
        {
            content: "теплоизоляция трубопроводов и емкостного оборудования",
            icon: "/4.png",
            is_blue: false,
        },
        {
            content: "инжиниринг (разработка индвидуальных технологических решений)",
            icon: "/5.png",
            is_blue: false,
        },
        {
            content: "купажные отделения (собственное производство)",
            icon: "/6.png",
            is_blue: false,
        },
        {
            content: "запуск объекта под ключ",
            icon: "/7.png",
            is_blue: false,
        }
    ]);

    return (
        <div className="px-20">
            <div className="text-5xl">Основные направления</div>
            <div className="grid grid-cols-5 gap-5 mt-20">
                {directions.map((direction, index) => (
                    <div
                        key={index}
                        className={`p-3 border border-[#F0F0F0] flex flex-col ${direction.is_blue && ("bg-[#0061AD] text-white")}`}
                    >
                        <img src={`/directions/${direction.icon}`} className="ml-auto w-[50px] mb-40" />
                        <div className="mt-auto">{direction.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
