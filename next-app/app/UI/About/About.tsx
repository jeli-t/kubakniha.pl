import Image from "next/image";
import AboutImg from './about.png'
import VictorLogo from './victor.png'
import { AnimateOnScroll } from "../AnimateOnScroll";

export function About() {
    return (
        <section id="o-mnie" className="relative z-30 w-full scroll-m-28 overflow-hidden bg-[#f0f5f3] px-5 sm:px-6" style={{ marginTop: '-80px', paddingTop: 'calc(80px + 2rem)', clipPath: 'polygon(0 0, 100% 80px, 100% 100%, 0 100%)' }}>
            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-16 lg:px-8 2xl:px-16">
                <AnimateOnScroll delay={150} className="md:order-1">
                <div className="w-full pb-8 md:pb-24">
                    <span className="eyebrow-dark text-base md:text-lg">O MNIE</span>
                    <h2 className="display-heading-dark max-w-3xl pt-2 text-left text-4xl sm:text-5xl lg:text-6xl">
                        Cześć, jestem Kuba!
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                    <p className="max-w-3xl pt-5 text-base leading-relaxed text-court-deep sm:text-lg md:text-xl">
                        Jestem młodym, ambitnym zawodnikiem klubu BENINCA UKS FENIKS Kędzierzyn-Koźle, a także instruktorem badmintona. W Kwietniu 2023 roku skończyłem kurs instruktorski i chcę przekazywać swoją wiedzę innym. Z badmintonem jestem związany już 11 lat. Aktualnie studiuję Informatykę na Politechnice Śląskiej. Poza tym interesuję się budowaniem sylwetki i siły na siłowni oraz dietetyką.
                    </p>
                    <div className="mt-14 border-t border-court-panel/25 pt-8">
                        <p className="text-base font-black text-court-deep sm:text-lg">
                            Patronem moich trenigów jest VICTOR POLSKA
                        </p>
                        <a href="https://victor-polska.pl/" target="_blank" rel="noopener noreferrer">
                        <Image src={VictorLogo} alt="Victor Polska" className="mt-6 h-16 w-auto md:h-24" />
                        </a>
                    </div>
                </div>
                </AnimateOnScroll>
                <AnimateOnScroll className="order-2 md:order-2">
                <div className="flex items-end justify-center md:justify-end">
                    <Image
                        src={AboutImg}
                        className="w-[88%] scale-105 object-contain md:w-auto md:h-[620px] md:-translate-x-24"
                        alt="Jakub Knihinicki z certyfikatem instruktora badmintona"
                    />
                </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}
