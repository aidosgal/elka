import { useState } from "react";

interface Link {
    name: string;
    link: string;
}

export default function Aim() {
    const [links] = useState<Link[]>([
        {
            name: "Сотрудники",
            link: "/about/team",
        },
        {
            name: "Вакансии",
            link: "/about/vacancies",
        },
        {
            name: "Официальный партнер Krones",
            link: "/krones",
        }
    ])

    return (
        <div>
            <div className="px-20 grid grid-cols-2 gap-x-10 mt-20">
                <div>
                    <div className="flex gap-5">
                        <img src="/about/graphic1.png" className="w-[400px]" />
                        <img src="/about/graphic2.png" className="w-[200px]" />
                    </div>
                    <div className="mt-10 text-[#0061AD] text-lg">Наша цель – комплексный подход к решению задач</div>
                    <div className="mt-5">
                        За каждым успешным проектом ТОО «Elke Company» стоит команда<br />
                        профессионалов, объединенных общей целью – создавать решения,<br />
                        которые работают на благо наших клиентов.
                    </div>
                </div>
                <img src="/about/about.png" />
            </div>
            <div className="px-20 text-[#1A1A1A33] mt-10">Быстрая навигация</div>
            <div className="grid gap-5 grid-cols-3 px-20">
                {links.map((link, index) => (
                    <div key={index} className="flex px-5 py-7 border border-[#f0f0f0] mt-5">
                        <div>{link.name}</div>
                        <img src="/about/Vector.png" className="w-[20px] object-cover h-[20px] ml-auto" />
                    </div>
                ))}
            </div>
        </div>
    )
}
