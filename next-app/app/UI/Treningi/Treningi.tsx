import Image from "next/image";
import TreningiImg from './treningi.jpeg'

export function Treningi() {
    return (
        <div id="treningi" className="flex items-center justify-center w-full min-h-fit pt-16 pb-16 scroll-m-28 bg-zinc-700">
            <div className="w-full flex items-center justify-between align-center max-w-7xl p-4 flex-col md:flex-row gap-4 md:gap-10">
                <Image
                    src={TreningiImg}
                    className="w-full md:w-1/2"
                    alt= "Treningi badmintona dla każdego"
                />
                <div className="w-full md:w-1/2">
                    <span className="text-md md:text-lg tracking-widest font-bold text-sky-400">TRENINGI</span>
                    <h2 className="text-left text-2xl md:text-3xl font-semibold">
                        Nauczę Cię grać w badmintona
                    </h2>
                    <p className="pt-2 md:pt-4 text-lg md:text-xl">
                        Chcesz poprawić swoją technikę, szybkość i wytrzymałość na korcie? Zapraszam na treningi indywidualne z badmintona w grupie od 2 do 4 osób. Możesz zabrać ze sobą znajomych lub rodzinę! Treningi są dostosowane do indywidualnych potrzeb i celów - od podstawowych zasad gry, po zaawansowane strategie taktyczne. Gwarantuję profesjonalne podejście i dobrą zabawę! <br /> Treningi odbywają się w INFINITI - Centrum Zdrowia na Alei Jana Pawła II 58, 47-232 Kędzierzyn-Koźle. Zapisy telefonicznie lub mailowo.
                    </p>
                </div>
            </div>
        </div>
    )
}