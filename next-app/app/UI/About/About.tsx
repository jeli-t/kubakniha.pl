import Image from "next/image";
import AboutImg from './about.png'

export function About() {
    return (
        <div id="o-mnie" className="flex items-center justify-center w-full min-h-fit mb-0 pb-0 scroll-m-28">
            <div className="w-full flex items-center justify-between align-center max-w-7xl p-4 pt-16 pb-0 flex-col-reverse md:flex-row-reverse">
                <div className="h-full flex justify-center items-end p-0 m-0">
                    <Image
                        src={AboutImg}
                        className="w-[90%] md:h-[600px] md:w-auto"
                        alt= "Profesjonalny trener badmintona"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <span className="text-md md:text-lg tracking-widest font-bold text-sky-400">O MNIE</span>
                    <h2 className="text-left text-2xl md:text-3xl font-semibold">
                        Cześć, jestem Kuba!
                    </h2>
                    <p className="pt-2 md:pt-4 text-lg md:text-xl">
                        Jestem młodym, ambitnym zawodnikiem klubu BENINCA UKS FENIKS Kędzierzyn-Koźle, a także instruktorem badmintona. W Kwietniu 2023 roku skończyłem kurs instruktorski i chcę przekazywać swoją wiedzę innym. Z badmintonem jestem związany już 9 lat. Poza tym interesuję się budowaniem sylwetki i siły na siłowni, dietetyką.
                    </p>
                </div>
            </div>
        </div>
    )
}