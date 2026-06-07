import Image from "next/image";
import HeroImg from "./hero.png";
import HeroBg from "./hero-bg.png";

export function HeroSection() {
    return (
        <section className="hero-court relative isolate flex min-h-screen w-full overflow-hidden pt-20">
            {/* Background photo */}
            <Image
                src={HeroBg}
                alt=""
                fill
                priority
                className="-z-30 object-cover object-center"
            />
            {/* Dark gradient — left readable, right reveals photo */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#001c19]/95 via-[#002b26]/80 to-[#003830]/25"></div>
            {/* Subtle court line accents */}
            <div className="pointer-events-none absolute inset-0 -z-10" style={{
                background: `
                    linear-gradient(18deg, transparent 0 42%, rgba(248,255,249,0.06) 42.2% 42.8%, transparent 43% 100%),
                    linear-gradient(96deg, transparent 0 78%, rgba(248,255,249,0.06) 78.2% 78.8%, transparent 79% 100%)
                `
            }}></div>

            <div className="mx-auto grid w-full flex-1 max-w-[1600px] grid-cols-1 items-stretch gap-0 px-5 pb-0 pt-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] md:gap-8 md:px-10 lg:px-14 2xl:px-16">
                <div className="z-10 flex flex-col justify-center self-center pb-8 pt-4 sm:pb-10 md:pb-16">
                    <h1 className="hero-anim display-heading max-w-[860px] text-5xl leading-[1] sm:text-7xl lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem]" style={{ animationDelay: '0.05s' }}>
                        Badminton
                        <br />
                        dla każdego
                    </h1>

                    <div className="hero-anim mt-5 h-1.5 w-20 bg-court-panel sm:w-24 md:mt-7" style={{ animationDelay: '0.2s' }}></div>

                    <p className="hero-anim mt-5 max-w-2xl text-base font-semibold leading-snug text-court-white sm:text-xl md:mt-6 md:text-2xl" style={{ animationDelay: '0.3s' }}>
                        Treningi badmintona w Katowicach dla dzieci i dorosłych. Wejdź na wyższy poziom gry.
                    </p>

                    <a href="#kontakt" className="hero-anim btn mt-7 h-auto w-fit rounded-full border-0 bg-court-white px-6 py-4 font-body text-base font-black text-court-deep shadow-xl hover:bg-court-panel hover:text-court-white sm:px-7 sm:text-lg md:mt-8 md:px-9 md:text-xl" style={{ animationDelay: '0.4s' }}>
                        Zapisz się na trening
                        <span className="pl-2 text-4xl leading-none text-court-green sm:pl-3 sm:text-3xl">›</span>
                    </a>

                    {/* Location badges */}
                    <div className="hero-anim mt-7 flex flex-wrap gap-2 md:mt-8" style={{ animationDelay: '0.5s' }}>
                        {[
                            { label: 'Centrum Sportu Bażantowo', href: 'https://www.google.com/maps/place/Centrum+Sportowe+Ba%C5%BCantowo/@50.1970058,18.9786721,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716c92c35818185:0x6d865a6e7c4af1d1!8m2!3d50.1970024!4d18.981247!16s%2Fg%2F1jkxdwkz3?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
                            { label: 'Hala Basen Zadole', href: 'https://www.google.com/maps/place/Basen+Zadole/@50.2185952,18.9626548,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cfb49a4fb9c9:0x7badcdc046823bed!8m2!3d50.2185918!4d18.9652297!16s%2Fg%2F11tc9_pvrx?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D' },
                            { label: 'inne okoliczne hale', href: null },
                        ].map(({ label, href }) => {
                            const cls = "flex items-center gap-1.5 rounded-full bg-court-white/10 px-3 py-1.5 text-xs font-semibold text-court-white backdrop-blur-sm ring-1 ring-court-white/20 sm:text-sm";
                            const icon = (
                                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-current text-court-panel" aria-hidden="true">
                                    <path d="M18.364 4.636a9 9 0 0 1 0 12.728l-4.243 4.243a3 3 0 0 1 -4.242 0l-4.243 -4.243a9 9 0 1 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
                                </svg>
                            );
                            return href ? (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`${cls} hover:bg-court-white/20 transition-colors`}>
                                    {icon}{label}
                                </a>
                            ) : (
                                <span key={label} className={cls}>{icon}{label}</span>
                            );
                        })}
                    </div>
                </div>

                <div className="hero-anim-photo relative flex items-end justify-center self-end md:justify-end">
                    <div className="absolute bottom-0 right-0 h-[72%] w-[84%] rounded-t-full bg-court-panel/12 blur-3xl"></div>
                    <Image
                        src={HeroImg}
                        priority
                        className="relative z-10 h-auto max-h-[88svh] w-full origin-bottom object-contain sm:max-h-[75svh] md:w-auto md:max-h-[calc(100vh-5rem)] md:max-w-[112%] md:scale-95"
                        alt="Jakub Knihinicki - instruktor badmintona Katowice"
                    />
                </div>
            </div>
        </section>
    )
}
