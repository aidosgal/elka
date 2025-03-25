import { useState } from "react";

interface Certi {
    name: string;
    size: string;
    link: string;
}

export default function Certificate() {
    const [certificates] = useState<Certi[]>([
        {
            name: "Сертификат соответствия №0000001",
            size: "2 МБ",
            link: "",
        },
        {
            name: "Сертификат соответствия №0000001",
            size: "2 МБ",
            link: "",
        },
        {
            name: "Сертификат соответствия №0000001",
            size: "2 МБ",
            link: "",
        },
        {
            name: "Сертификат соответствия №0000001",
            size: "2 МБ",
            link: "",
        },
        {
            name: "Сертификат соответствия №0000001",
            size: "2 МБ",
            link: "",
        }
    ])

    return (
        <div className="px-5 mt-20">
            <div className="px-20 grid grid-cols-3 gap-5">
                <div>
                    <div className="text-4xl">Сертификаты</div>
                </div>
                <div className="col-span-2 flex flex-col gap-5">
                    {certificates.map((certificate, index) => (
                        <div key={index} className="flex px-5 py-7 border border-[#f0f0f0] items-center">
                            <div>
                                <div className="text-lg">{certificate.name}</div>
                                <div className="mt-2 text-[#1A1A1A33]"><span className="text-[#FA0F00]">PDF</span> {certificate.size}</div>
                            </div>
                            <div className="ml-auto">
                                <img src="/about/Vector.png" className="w-[20px] h-[20px] object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
