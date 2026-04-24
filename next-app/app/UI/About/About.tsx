import Image from "next/image";
import AboutImg from './about.png'

export function About() {
    return (
        <div id="o-mnie" className="flex items-center justify-center w-full min-h-fit mb-0 pb-0 scroll-m-28 bg-court-deep/35">
            <div className="w-full flex items-center justify-between align-center max-w-[1600px] p-4 pt-16 pb-0 flex-col-reverse md:flex-row-reverse lg:px-14 2xl:px-16">
                <div className="h-full flex justify-center items-end p-0 m-0">
                    <Image
                        src={AboutImg}
                        className="w-[90%] md:h-[600px] md:w-auto"
                        alt= "Profesjonalny trener badmintona"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <span className="eyebrow text-base md:text-lg">O MNIE</span>
                    <h2 className="display-heading max-w-3xl pt-2 text-left text-4xl sm:text-5xl lg:text-6xl">
                        Cześć, jestem Kuba!
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                    <p className="max-w-3xl pt-5 text-base leading-relaxed text-court-white sm:text-lg md:text-xl">
                        Jestem młodym, ambitnym zawodnikiem klubu BENINCA UKS FENIKS Kędzierzyn-Koźle, a także instruktorem badmintona. W Kwietniu 2023 roku skończyłem kurs instruktorski i chcę przekazywać swoją wiedzę innym. Z badmintonem jestem związany już 11 lat. Poza tym interesuję się budowaniem sylwetki i siły na siłowni, dietetyką.
                    </p>
                </div>
            </div>
        </div>
    )
}

