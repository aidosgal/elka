import { useState } from "react";

interface Client {
    id: number;
    image: string;
    name: string;
    location: string;
}

interface Region {
    id: number;
    image: string;
    clients: Client[];
}

interface Country {
    id: number;
    name: string;
    regions: Region[];
}

export default function Map() {
    const [countries] = useState<Country[]>([
        {
            id: 1,
            name: "Казахстан",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
        {
            id: 2,
            name: "Европа",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
        {
            id: 3,
            name: "Азия",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
        {
            id: 4,
            name: "СНГ",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
        {
            id: 5,
            name: "Саудовская Аравия",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
        {
            id: 6,
            name: "Африка",
            regions: [
                {
                    id: 1,
                    image: "/regions/1.png",
                    clients: [
                        {
                            id: 1,
                            image: "/clients/1.png",
                            name: "coca cola",
                            location: "astana",
                        }
                    ]
                },
            ]
        },
    ]);
    const [selectedCountry, setSelectedCountry] = useState<number>(countries[0].id);


    return (
        <div className="px-20 mt-10 mb-20">
            <div className="text-5xl">География проектов</div>
            <div className="flex gap-5 flex-wrap mt-10">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className={`py-3 px-10 border border-[#f0f0f0] cursor-pointer ${selectedCountry == index && ("bg-[#0061AD] text-white")}`}
                        onClick={() => setSelectedCountry(index)}
                    >
                        {country.name}
                    </div>
                ))}
            </div>
            <div>
                {countries[selectedCountry].name}
            </div>
        </div>
    );
};
