import { useState } from "react";

interface ReviewData {
    company: string;
    name: string;
    logo: string;
    content: string;
    images: string[];
    span: string;
}

export default function Review() {
    const [reviews] = useState<ReviewData[]>([
        {
            company: "Название компании",
            name: "Имя контактного лица, должность",
            logo: "/about/review/logo.png",
            content: `Наша компания выражает искреннюю благодарность ТОО «Elke Company» за высокий профессионализм и качественное выполнение работ. Сотрудничество с вашей командой оставило исключительно положительные впечатления.

Особенно хочется отметить оперативность, с которой были выполнены шеф- монтаж и пуско - наладка оборудования.Специалисты компании продемонстрировали глубокое понимание технических процессов и умение быстро находить эффективные решения для возникающих задач.`,
            images: ["/about/review/1.png", "/about/review/2.png"],
            span: "col-span-2",
        },
        {
            company: "Название компании",
            name: "Имя контактного лица, должность",
            logo: "/about/review/logo.png",
            content: "Наша компания выражает искреннюю благодарность ТОО «Elke Company» за высокий профессионализм и качественное выполнение работ. Сотрудничество с вашей командой оставило исключительно положительные впечатления.",
            images: ["/about/review/1.png", "/about/review/2.png"],
            span: "col-span-1",
        },
        {
            company: "Название компании",
            name: "Имя контактного лица, должность",
            logo: "/about/review/logo.png",
            content: "Наша компания выражает искреннюю благодарность ТОО «Elke Company» за высокий профессионализм и качественное выполнение работ. Сотрудничество с вашей командой оставило исключительно положительные впечатления. Особенно хочется отметить оперативность, с которой были выполнены шеф- монтаж и пуско - наладка оборудования.Специалисты компании продемонстрировали глубокое понимание технических процессов и умение быстро находить эффективные решения для возникающих задач.",
            images: [],
            span: "col-span-1",
        },
    ])
    return (
        <div className="px-5 mt-20">
            <div className="px-20 grid grid-cols-3">
                <div>
                    <div className="text-4xl">Отзывы</div>
                </div>
                <div className="col-span-2">
                    <div>
                        Ничто не говорит о качестве услуг так, как благодарственные письма и  отзывы довольных клиентов. Они являются нашим лучшим рекламным инструментом. Читайте их и убедитесь сами, как ТОО «Elke Company» помогает своим партнерам достигать успеха.
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5">
                        {reviews.map((review, index) => (
                            <div key={index} className={`p-5 border border-[#F0F0F0] ${review.span}`}>
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-lg">{review.company}</div>
                                        <div className="">{review.name}</div>
                                    </div>
                                    <div className="ml-auto">
                                        <img src={review.logo} />
                                    </div>
                                </div>
                                <div className="pt-5 mt-5 border-t border-[#f0f0f0]">
                                    {review.content}
                                </div>
                                <div className="grid grid-cols-2 gap-5 mt-5">
                                    {review.images.map((image, index) => (
                                        <img key={index} src={image} className="w-full" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
