import Image from "next/image";
import HeroImg from './hero.png'

export function HeroSection() {
    return (
        <section className="hero-court relative isolate flex min-h-screen overflow-hidden pt-20">
            <div className="absolute inset-0 -z-10 bg-court-deep/25"></div>
            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-4 px-5 pb-0 pt-2 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] md:gap-8 md:px-10 lg:px-14 2xl:px-16">
                <div className="z-10 flex h-full flex-col justify-center pb-8 pt-6 md:pb-16">
                    <div className="flex items-center gap-4">
                        
                    </div>

                    <h1 className="display-heading mt-10 max-w-[860px] text-[clamp(2.8rem,12vw,4.8rem)] leading-[1] sm:text-[clamp(3.6rem,10vw,5.7rem)] md:mt-14 lg:text-[clamp(5rem,7vw,6.8rem)] xl:text-[7rem]">
                        Badminton
                        <br />
                        dla każdego
                    </h1>

                    <div className="mt-6 h-1.5 w-24 bg-court-panel md:mt-8"></div>

                    <p className="mt-6 max-w-2xl text-lg font-semibold leading-snug text-court-white sm:text-xl md:text-2xl">
                        Treningi badmintona w Katowicach dla dzieci i dorosłych. Wejdź na wyższy poziom gry
                    </p>

                    <a href="#kontakt" className="btn mt-8 h-auto w-fit rounded-full border-0 bg-court-white px-7 py-4 font-body text-lg font-black text-court-deep shadow-xl hover:bg-court-panel hover:text-court-white sm:text-xl md:px-9">
                        Zapisz się na trening
                        <span className="pl-3 text-3xl leading-none text-court-green">›</span>
                    </a>

                    <div className="mt-8 flex items-center gap-3 text-base font-semibold text-court-white sm:text-lg md:text-xl">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-court-panel" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                                <path d="M18.364 4.636a9 9 0 0 1 0 12.728l-4.243 4.243a3 3 0 0 1 -4.242 0l-4.243 -4.243a9 9 0 1 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                            </svg>
                        </span>
                        <span>Katowice · Centrum Sportowe Bażantowo</span>
                    </div>
                </div>

                <div className="relative flex min-h-[360px] items-end justify-center sm:min-h-[440px] md:min-h-[640px] md:justify-end">
                    <div className="absolute bottom-0 right-0 h-[72%] w-[84%] rounded-t-full bg-court-panel/12 blur-3xl"></div>
                    <Image
                        src={HeroImg}
                        priority
                        className="relative z-10 h-auto max-h-[58vh] w-auto max-w-[96%] object-contain sm:max-h-[64vh] md:max-h-[82vh] md:max-w-[112%]"
                        alt= "Jakub Knihinicki"
                    />
                </div>
            </div>
        </section>
    )
}
