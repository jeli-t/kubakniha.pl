import Image from "next/image";
import InstagramIcon from "./ig.png";
import FacebookIcon from "./fb.png";
import { AnimateOnScroll } from "../AnimateOnScroll";

export function Contact() {
    return (
        <section id="kontakt" className="relative z-40 flex w-full scroll-m-28 items-center justify-center bg-court-deep px-5 pb-28 sm:px-6 md:pb-36" style={{ marginTop: '-80px', paddingTop: 'calc(80px + 5rem)', clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)' }}>
            <div className="grid w-full max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24 lg:px-8 2xl:px-16">

                {/* Left: heading */}
                <AnimateOnScroll>
                <div>
                    <span className="eyebrow text-base md:text-lg">Kontakt</span>
                    <h3 className="display-heading pt-2 text-4xl sm:text-5xl lg:text-6xl">
                        Zapisz się na trening!
                    </h3>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                    <p className="mt-6 max-w-lg text-base leading-relaxed text-court-white/75 sm:text-lg md:text-xl">
                        Masz jakieś pytania? Pisz śmiało, odpowiem i pomogę dobrać trening do Twojego poziomu gry.
                    </p>
                </div>
                </AnimateOnScroll>

                {/* Right: contact list */}
                <AnimateOnScroll delay={150}>
                <div className="flex flex-col justify-center divide-y divide-court-white/10">

                    <a href="tel:+48782795254" className="group flex items-center gap-5 py-6 transition-opacity hover:opacity-75">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-court-white/10 text-court-panel ring-1 ring-court-white/15">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.49a1 1 0 0 1-1 1C10.61 21.5 2.5 13.39 2.5 3.5a1 1 0 0 1 1-1H7a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-1.71 1.7Z" />
                            </svg>
                        </span>
                        <div className="min-w-0">
                            <span className="block text-xs font-bold uppercase tracking-widest text-court-panel">Telefon</span>
                            <span className="block text-2xl font-black text-court-white sm:text-3xl">782 795 254</span>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/j.knihinicki_badminton/" target="_blank" rel="noreferrer" className="group flex items-center gap-5 py-6 transition-opacity hover:opacity-75">
                        <Image
                            src={InstagramIcon}
                            className="h-12 w-12 shrink-0 rounded-full ring-1 ring-court-white/15"
                            alt="Instagram"
                            width={48}
                            height={48}
                        />
                        <div className="min-w-0">
                            <span className="block text-xs font-bold uppercase tracking-widest text-court-panel">Instagram</span>
                            <span className="block truncate text-xl font-black text-court-white sm:text-2xl">j.knihinicki_badminton</span>
                        </div>
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=61552974901285" target="_blank" rel="noreferrer" className="group flex items-center gap-5 py-6 transition-opacity hover:opacity-75">
                        <Image
                            src={FacebookIcon}
                            className="h-12 w-12 shrink-0 rounded-full ring-1 ring-court-white/15"
                            alt="Facebook"
                            width={48}
                            height={48}
                        />
                        <div className="min-w-0">
                            <span className="block text-xs font-bold uppercase tracking-widest text-court-panel">Facebook</span>
                            <span className="block truncate text-lg font-black text-court-white sm:text-xl">Jakub Knihinicki – Instruktor badmintona</span>
                        </div>
                    </a>

                </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}
