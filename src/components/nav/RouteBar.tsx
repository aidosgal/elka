import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../../types/links";

export default function RouteBar() {
    const location = useLocation()
    const path = location.pathname.split("/")
    const currentPath = path[path.length - 1]
    const [links] = useState<Link[]>([
        {
            name: "Проекты",
            link: "projects",
        },
        {
            name: "Главная",
            link: "",
        },
        {
            name: "О компании",
            link: "about",
        },
        {
            name: "Вакансии",
            link: "jobs",
        },
        {
            name: "Krones",
            link: "krones",
        },
        {
            name: "Конакты",
            link: "contacts",
        }
    ]);

    const linksMap = useMemo(() => {
        const map: Record<string, Link> = {};
        links.forEach(link => {
            map[link.link] = link;
        });
        return map;
    }, [links]);

    return (
        <div className="flex gap-3 text-[#1A1A1A80]">
            {path.map((segment, index) => (
                <div
                    key={index}
                    className={`${linksMap[segment].link == "" ? ("") : ("border-l-2 border-[#F0F0F0]")} px-7 py-4 ${currentPath == linksMap[segment].link && ("text-[#0061AD]")}`}
                >
                    {linksMap[segment]?.name}
                </div>
            ))}
        </div>
    );
}
