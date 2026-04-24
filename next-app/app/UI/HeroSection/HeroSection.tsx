import Image from "next/image";
import HeroImg from './hero.png'

export function HeroSection() {
    return (
        <div className="hero min-h-screen overflow-hidden">
            <div className="h-full w-full flex items-center md:justify-between align-center max-w-7xl p-4 pt-16 pb-0 flex-col-reverse md:flex-row-reverse">
                <div className="md:h-full flex justify-center items-end p-0 m-0">
                    <Image
                        src={HeroImg}
                        className="w-[100%] min-h-[450px] md:w-[90%] h-auto md:min-w-[400px] xl:min-w-[500px]"
                        alt= "Jakub Knihinicki"
                    />
                </div>
                <div className="pb-10 w-full min-w-fit">
                    <h1 className="headline-panel display-heading mx-auto w-fit px-6 py-5 text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
                        Jakub Knihinicki
                        <br />
                        <span className="block pt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Instruktor i zawodnik badmintona
                        </span>
                    </h1>
                    <div className="flex justify-center pt-4 lg:pt-8">
                        <a href="#kontakt">
                            <button className="btn border-0 bg-court-orange px-8 font-display text-lg italic text-court-white shadow-lg hover:bg-court-white hover:text-court-deep">Kontakt</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
