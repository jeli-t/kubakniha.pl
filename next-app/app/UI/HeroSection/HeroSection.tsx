import Image from "next/image";
import HeroImg from './hero.png'

export function HeroSection() {
    return (
        <div className="hero min-h-screen">
            <div className="h-full w-full flex items-center md:justify-between align-center max-w-7xl p-4 pt-16 pb-0 flex-col-reverse md:flex-row-reverse">
                <div className="md:h-full flex justify-center items-end p-0 m-0">
                    <Image
                        src={HeroImg}
                        className="w-[100%] min-h-[450px] md:w-[90%] h-auto md:min-w-[400px] xl:min-w-[500px]"
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