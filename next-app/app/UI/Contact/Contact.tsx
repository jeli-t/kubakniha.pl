import Image from "next/image";
import InstagramIcon from "./ig.png";
import FacebookIcon from "./fb.png";

export function Contact() {
    return (
        <section id="kontakt" className="section-band flex w-full scroll-m-28 items-center justify-center px-5 py-16 sm:px-6 md:py-24">
            <div className="grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.8fr)] lg:gap-16 lg:px-8 2xl:px-16">
                <div className="max-w-3xl">
                    <span className="eyebrow text-base md:text-lg">Kontakt</span>
                    <h3 className="display-heading pt-2 text-4xl sm:text-5xl lg:text-6xl">
                        Zapisz się na trening!
                    </h3>
                    <p className="max-w-2xl pt-4 text-lg leading-relaxed text-court-white sm:text-xl md:text-2xl">
                        Masz jakieś pytania? Pisz śmiało, odpowiem i pomogę dobrać trening do Twojego poziomu gry.
                    </p>
                </div>

                <div className="w-full rounded-[2rem] bg-court-deep/80 p-4 shadow-2xl ring-1 ring-court-white/15 sm:p-6 md:justify-self-end">
                    <div className="rounded-[1.5rem] bg-court-panel/85 p-4 sm:p-6">
                        <h4 className="font-display text-3xl font-black italic uppercase text-court-white sm:text-4xl">
                            Odezwij się
                        </h4>

                        <div className="mt-6 grid gap-3">
                            <a className="group flex min-w-0 items-center gap-4 rounded-2xl bg-court-white px-4 py-4 text-court-deep shadow-lg transition hover:bg-court-line" href="tel:+48782795254">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-court-deep text-court-white">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                                        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.49a1 1 0 0 1-1 1C10.61 21.5 2.5 13.39 2.5 3.5a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-1.71 1.7Z" />
                                    </svg>
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-bold uppercase text-court-green">Telefon</span>
                                    <span className="block truncate text-xl font-black">782 795 254</span>
                                </span>
                            </a>

                            <a className="group flex min-w-0 items-center gap-4 rounded-2xl bg-court-white/95 px-4 py-4 text-court-deep shadow-lg transition hover:bg-court-line" href="https://www.instagram.com/j.knihinicki_badminton/" target="_blank" rel="noreferrer">
                                <Image
                                    src={InstagramIcon}
                                    className="h-11 w-11 shrink-0 rounded-full"
                                    alt="Instagram"
                                    width={44}
                                    height={44}
                                />
                                <span className="min-w-0">
                                    <span className="block text-sm font-bold uppercase text-court-green">Instagram</span>
                                    <span className="block truncate text-lg font-black sm:text-xl">j.knihinicki_badminton</span>
                                </span>
                            </a>

                            <a className="group flex min-w-0 items-center gap-4 rounded-2xl bg-court-white/95 px-4 py-4 text-court-deep shadow-lg transition hover:bg-court-line" href="https://www.facebook.com/profile.php?id=61552974901285" target="_blank" rel="noreferrer">
                                <Image
                                    src={FacebookIcon}
                                    className="h-11 w-11 shrink-0 rounded-full"
                                    alt="Facebook"
                                    width={44}
                                    height={44}
                                />
                                <span className="min-w-0">
                                    <span className="block text-sm font-bold uppercase text-court-green">Facebook</span>
                                    <span className="block truncate text-lg font-black sm:text-xl">Jakub Knihinicki - Instruktor badmintona </span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
