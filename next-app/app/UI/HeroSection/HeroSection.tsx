import Image from "next/image";
import HeroImg from "./hero.png";

export function HeroSection() {
    return (
        <section className="hero-court relative isolate flex min-h-[100svh] overflow-hidden pt-20">
            <div className="absolute inset-0 -z-10 bg-court-deep/25"></div>

            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-0 px-5 pb-0 pt-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] md:gap-8 md:px-10 lg:px-14 2xl:px-16">
                <div className="z-10 flex flex-col justify-center pb-4 pt-4 sm:pb-6 md:min-h-[calc(100svh-5rem)] md:pb-16">
                    <h1 className="display-heading max-w-[860px] text-5xl leading-[1] sm:text-7xl lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem]">
                        Badminton
                        <br />
                        dla każdego
                    </h1>

                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24 md:mt-7"></div>

                    <p className="mt-5 max-w-2xl text-base font-semibold leading-snug text-court-white sm:text-xl md:mt-6 md:text-2xl">
                        Treningi badmintona w Katowicach dla dzieci i dorosłych. Wejdź na wyższy poziom gry.
                    </p>

                    <a href="#kontakt" className="btn mt-7 h-auto w-fit rounded-full border-0 bg-court-white px-6 py-4 font-body text-base font-black text-court-deep shadow-xl hover:bg-court-panel hover:text-court-white sm:px-7 sm:text-lg md:mt-8 md:px-9 md:text-xl">
                        Zapisz się na trening
                        <span className="pl-2 text-2xl leading-none text-court-green sm:pl-3 sm:text-3xl">›</span>
                    </a>

                    <div className="mt-7 flex max-w-md items-center gap-3 text-sm font-semibold leading-snug text-court-white sm:max-w-none sm:text-base md:mt-8 md:text-xl">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center text-court-panel sm:h-8 sm:w-8" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
                                <path d="M18.364 4.636a9 9 0 0 1 0 12.728l-4.243 4.243a3 3 0 0 1 -4.242 0l-4.243 -4.243a9 9 0 1 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                            </svg>
                        </span>
                        <span>Katowice · Centrum Sportowe Bażantowo</span>
                    </div>
                </div>

                <div className="relative flex min-h-[300px] items-end justify-center sm:min-h-[380px] md:min-h-[calc(100svh-5rem)] md:justify-end">
                    <div className="absolute bottom-0 right-0 h-[72%] w-[84%] rounded-t-full bg-court-panel/12 blur-3xl"></div>
                    <Image
                        src={HeroImg}
                        priority
                        className="relative z-10 h-auto max-h-[42svh] w-auto max-w-[92%] object-contain sm:max-h-[48svh] md:max-h-[82svh] md:max-w-[112%]"
                        alt="Jakub Knihinicki"
                    />
                </div>
            </div>
        </section>
    )
}

