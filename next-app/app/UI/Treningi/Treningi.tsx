import Image from "next/image";
import TreningiImg from "./treningi.png";
import { AnimateOnScroll } from "../AnimateOnScroll";

export function Treningi() {
    return (
        <section id="treningi" className="relative z-20 flex w-full scroll-m-28 items-center justify-center bg-white px-5 pb-28 sm:px-6 md:pb-36" style={{paddingTop: 'calc(5rem)' }}>
            <div className="grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-[minmax(320px,0.92fr)_minmax(0,1fr)] lg:gap-20 lg:px-8 2xl:px-16">
                <AnimateOnScroll>
                <div className="relative mx-auto w-full max-w-3xl md:mx-0">
                    <div className="relative shadow-2xl">
                        <Image
                            src={TreningiImg}
                            className="aspect-[4/3] w-full rounded-[1.55rem] object-cover md:aspect-[5/4] lg:aspect-[4/3]"
                            alt="Treningi badmintona Katowice - Jakub Knihinicki instruktor"
                        />
                    </div>
                </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={150}>
                <div className="w-full">
                    <span className="eyebrow-dark text-base md:text-lg">TRENINGI</span>
                    <h2 className="display-heading-dark max-w-3xl pt-2 text-left text-4xl sm:text-5xl lg:text-6xl">
                        Nauczę Cię grać w badmintona
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                    <p className="max-w-3xl pt-5 text-base leading-relaxed text-court-deep sm:text-lg md:text-xl">
                        Chcesz poprawić swoją technikę, szybkość i wytrzymałość na korcie? A może tylko poruszać się i poznać nowy sport pod okiem trenera? Zapraszam na treningi indywidualne lub w grupach 2-4 osobowych. Możesz zabrać ze sobą znajomych lub rodzinę! Treningi są dostosowane do indywidualnych potrzeb i celów - od podstawowych zasad gry, po zaawansowane strategie taktyczne. Gwarantuję profesjonalne podejście i dobrą zabawę! <br /><br /> Treningi mogą się odbywać w Centrum Sportu Bażantów ul. Pijarska 3, Katowice oraz na Hali Basenu Zadole ul. Wczasowa 8A, Katowice lub na innych okolicznych halach po wcześniejszym uzgodnieniu. Zapisy telefonicznie lub przez social media.
                    </p>
                </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}
