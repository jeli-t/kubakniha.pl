import Image from "next/image";
import TreningiImg from "./treningi.png";
import { AnimateOnScroll } from "../AnimateOnScroll";

export function Treningi() {
    return (
        <section id="treningi" className="relative z-20 flex w-full scroll-m-28 items-center justify-center bg-white px-5 pb-28 sm:px-6 md:pb-36" style={{paddingTop: 'calc(5rem)' }}>
            <div className="grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 md:grid-cols-[minmax(320px,0.92fr)_minmax(0,1fr)] lg:gap-20 lg:px-8 2xl:px-16">
                <AnimateOnScroll className="order-2 md:order-1">
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

                <AnimateOnScroll delay={150} className="order-1 md:order-2">
                <div className="w-full">
                    <span className="eyebrow-dark text-base md:text-lg">TRENINGI</span>
                    <h2 className="display-heading-dark max-w-3xl pt-2 text-left text-4xl sm:text-5xl lg:text-6xl">
                        Nauczę Cię grać w badmintona
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>

                    <ul className="mt-5 space-y-2 text-base leading-relaxed text-court-deep sm:text-lg md:text-xl">
                        {[
                            'Nauka badmintona od zera.',
                            'Poznanie zasad oraz wykorzystanie badmintona jako hobby.',
                            'Poprawa techniki, szybkości i wytrzymałości.',
                            'Doskonalenie gry dla zaawansowanych zawodników.',
                            'Treningi indywidualne.',
                            'Treningi w grupach 2–4 osobowych.',
                            'Profesjonalne podejście i dobra zabawa.',
                        ].map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-court-panel"></span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 border-t border-court-panel/20 pt-6">
                        <span className="eyebrow-dark text-sm md:text-base">Lokalizacja</span>
                        <ul className="mt-3 space-y-2 text-base leading-relaxed text-court-deep sm:text-lg md:text-xl">
                            <li>Centrum Sportu Bażantów ul. Pijarska 3, Katowice</li>
                            <li>Hala Basenu Zadole ul. Wczasowa 8A, Katowice</li>
                            <li>Inne okoliczne hale (po wcześniejszym umówieniu)</li>
                        </ul>
                        <p className="mt-4 text-base leading-relaxed text-court-deep sm:text-lg md:text-xl">
                            Zapisy telefonicznie lub przez Social Media.
                        </p>
                    </div>
                </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}
