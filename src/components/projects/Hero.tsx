export default function Hero() {
    return (
        <div className="w-full flex flex-col h-[800px] relative bg-[url(/projects/hero.png)] bg-center mt-5">
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="mx-auto my-auto text-center text-white z-10 relative">
                <div className="text-6xl">Проекты</div>
                <div className="mt-5">
                    Среди наших клиентов — как крупные международные концерны, так и малые<br />
                    локальные предприятия. Мы гордимся тем, что смогли помочь многим компаниям<br />
                    оптимизировать свои производственные процессы по всему миру.
                </div>
            </div>
        </div>
    )
}
