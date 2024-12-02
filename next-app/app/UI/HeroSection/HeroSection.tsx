import Image from "next/image";
import HeroImg from './hero.png'

export function HeroSection() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content h-full justify-between align-bottom  max-w-7xl flex-col md:flex-row-reverse gap-4 md:gap-10 xl:gap-20 p-0">
                <div className="h-full flex justify-center items-end p-0 m-0">
                    <Image
                        src={HeroImg}
                        className="w-[90%] h-auto md:min-w-[400px] xl:min-w-[500px]"
                        alt= "Jakub Knihinicki"
                    />
                </div>
                <div className="pb-10 w-full min-w-fit">
                    <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                        Jakub Knihinicki
                        <br />
                        <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal">
                            Instruktor i zawodnik badmintona
                        </span>
                    </h1>
                    <div className="flex justify-center pt-4 lg:pt-8">
                        <a href="#kontakt">
                            <button className="btn px-8 bg-sky-500 text-white">Kontakt</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}