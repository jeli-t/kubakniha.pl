import Image from "next/image";
import TreningiImg from "./treningi.jpeg";

export function Treningi() {
    return (
        <section id="treningi" className="training-court flex w-full scroll-m-28 items-center justify-center px-5 py-16 sm:px-6 md:py-24">
            <div className="grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-[minmax(320px,0.92fr)_minmax(0,1fr)] lg:gap-20 lg:px-8 2xl:px-16">
                <div className="relative mx-auto w-full max-w-3xl md:mx-0">
                    <span className="absolute -left-5 top-8 hidden h-1 w-24 bg-court-line/75 md:block"></span>
                    <span className="absolute -right-5 bottom-10 hidden h-1 w-28 bg-court-line/75 md:block"></span>
                    <span className="absolute -top-4 right-10 hidden h-20 w-1 bg-court-line/55 md:block"></span>
                    <div className="relative rounded-[2rem] border-4 border-court-white bg-court-white p-1 shadow-2xl">
                        <Image
                            src={TreningiImg}
                            className="aspect-[4/3] w-full rounded-[1.55rem] object-cover md:aspect-[5/4] lg:aspect-[4/3]"
                            alt="Treningi badmintona dla każdego"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <span className="eyebrow text-base md:text-lg">TRENINGI</span>
                    <h2 className="display-heading max-w-3xl pt-2 text-left text-4xl sm:text-5xl lg:text-6xl">
                        Nauczę Cię grać w badmintona
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                    <p className="max-w-3xl pt-5 text-base leading-relaxed text-court-white sm:text-lg md:text-xl">
                        Chcesz poprawić swoją technikę, szybkość i wytrzymałość na korcie? Zapraszam na treningi indywidualne z badmintona lub w grupie od 2 do 4 osób. Możesz zabrać ze sobą znajomych lub rodzinę! Treningi są dostosowane do indywidualnych potrzeb i celów - od podstawowych zasad gry, po zaawansowane strategie taktyczne. <br/> Gwarantuję profesjonalne podejście i dobrą zabawę! <br /> Treningi odbywają się w Centrum Sportu Bażantowo ul. Pijarska 3, Katowice. Zapisy telefonicznie lub przez social media.
                    </p>
                </div>
            </div>
        </section>
    )
}

