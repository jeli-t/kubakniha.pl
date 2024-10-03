import Image from "next/image";
import AboutImg from './about.png'

export function About() {
    return (
        <div className="flex items-center justify-center w-full min-h-fit mb-20">
            <div className="w-full flex items-center justify-between align-center max-w-7xl p-4 flex-col md:flex-row-reverse gap-4 md:gap-10">
                <Image
                    src={AboutImg}
                    className="w-full md:w-1/2"
                    alt= "Profesjonalny trener badmintona"
                />
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