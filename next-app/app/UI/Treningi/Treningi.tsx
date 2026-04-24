import Image from "next/image";
import TreningiImg from './treningi.jpeg'

export function Treningi() {
    return (
        <div id="treningi" className="section-band flex items-center justify-center w-full min-h-fit pt-16 pb-16 scroll-m-28">
            <div className="w-full flex items-center justify-between align-center max-w-[1600px] p-4 flex-col md:flex-row gap-4 md:gap-10 lg:px-14 2xl:px-16">
                <Image
                    src={TreningiImg}
                    className="w-full rounded-[2rem] border-4 border-court-white shadow-2xl md:w-1/2"
                    alt= "Treningi badmintona dla każdego"
                />
                <div className="w-full md:w-1/2">
                    <span className="eyebrow text-md md:text-lg">TRENINGI</span>
                    <h2 className="display-heading pt-2 text-left text-3xl md:text-5xl">
                        Nauczę Cię grać w badmintona
                    </h2>
                    <p className="pt-2 text-lg leading-relaxed text-court-white md:pt-4 md:text-xl">
                        Chcesz poprawić swoją technikę, szybkość i wytrzymałość na korcie? Zapraszam na treningi indywidualne z badmintona w grupie od 2 do 4 osób. Możesz zabrać ze sobą znajomych lub rodzinę! Treningi są dostosowane do indywidualnych potrzeb i celów - od podstawowych zasad gry, po zaawansowane strategie taktyczne. Gwarantuję profesjonalne podejście i dobrą zabawę! <br /> Treningi odbywają się w Centrum Sportu Bażantowo ul. Pijarska 3, Katowice. Zapisy telefonicznie lub mailowo.
                    </p>
                </div>
            </div>
        </div>
    )
}
