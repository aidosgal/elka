import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "../../types/links";

export default function RouteBar() {
    const location = useLocation()
    const path = location.pathname.split("/")
    const [links] = useState<Link[]>([
        {
            name: "Проекты",
            link: "projects",
        },
        {
            name: "Главная",
            link: "",
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
        <div className="flex gap-3">
            {path.map((segment, index) => (
                <div key={index}>{linksMap[segment]?.name}</div>
            ))}
        </div>
    );
}
