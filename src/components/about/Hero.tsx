export default function Hero() {
    return (
        <div className="w-full flex flex-col h-[800px] relative bg-[url(/about/hero.png)] bg-center mt-5">
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="mx-auto my-auto text-center text-white z-10 relative">
                <div className="text-6xl">О компании</div>
                <div className="mt-5">
                    В 2000 году было принято решение о запуске компании по<br />
                    оказанию монтажных услуг. С тех пор прошло более двух<br />
                    десятилетий, и ТОО «Elke Company» выросла из небольшой группы<br />
                    энтузиастов в крупную компанию, способную обслуживать<br />
                    клиентов по всему миру.
                </div>
            </div>
        </div>
    )
}
