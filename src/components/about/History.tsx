import { useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function History() {
    const [images] = useState<string[]>([
        "/1.png",
        "/2.png",
        "/1.png",
    ])
    return (
        <div className="mb-20">
            <div className="flex px-20 gap-10">
                <div>
                    <div className="text-4xl">История компании</div>
                    <div className="mt-10 text-lg">
                        Наша компания основана 20 июня 2000 года, основной<br />
                        деятельностью компании является монтаж технологического<br />
                        оборудования для приготовления и розлива напитков.
                    </div>
                </div>
                <div>
                    <img src="/about/graphic1.png" className="w-[300px]" />
                </div>
                <div className="ml-auto flex flex-col">
                    <img src="/about/logo.png" className="ml-auto w-[200px]" />
                </div>
            </div>
            <div className="w-screen pl-20 flex overflow-x-auto gap-10 mt-20">
                {images.map((image, index) => (
                    <img key={index} src={`/about/history${image}`} className="w-[900px] h-[600px] object-cover" />
                ))}
            </div>
            <div className="px-20 flex mt-10">
                <div className="flex items-center gap-5">
                    <div className="text-2xl">01</div>
                    <div className="text-2xl text-[#0061AD] flex items-center">
                        <GoDotFill />
                        <GoDotFill />
                    </div>
                    <div className="text-2xl text-[#1A1A1A33]">100</div>
                </div>
            </div>
        </div>
    );
}
