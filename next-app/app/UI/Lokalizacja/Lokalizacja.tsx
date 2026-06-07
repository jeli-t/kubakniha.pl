import { AnimateOnScroll } from "../AnimateOnScroll";

const locations = [
    {
        name: 'Centrum Sportu Bażantów',
        address: 'ul. Pijarska 3, Katowice',
        href: 'https://www.google.com/maps/place/Centrum+Sportowe+Ba%C5%BCantowo/@50.1970058,18.9786721,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716c92c35818185:0x6d865a6e7c4af1d1!8m2!3d50.1970024!4d18.981247!16s%2Fg%2F1jkxdwkz3?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        name: 'Hala Basenu Zadole',
        address: 'ul. Wczasowa 8A, Katowice',
        href: 'https://www.google.com/maps/place/Basen+Zadole/@50.2185952,18.9626548,723m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4716cfb49a4fb9c9:0x7badcdc046823bed!8m2!3d50.2185918!4d18.9652297!16s%2Fg%2F11tc9_pvrx?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
        name: 'Inne okoliczne hale',
        address: 'Po wcześniejszym uzgodnieniu',
        href: null,
    },
];

const PinIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.364 4.636a9 9 0 0 1 0 12.728l-4.243 4.243a3 3 0 0 1 -4.242 0l-4.243 -4.243a9 9 0 1 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" />
    </svg>
);

export function Lokalizacja() {
    return (
        <section
            id="lokalizacja"
            className="relative z-[25] w-full scroll-m-28 overflow-hidden bg-court-deep px-5 pb-24 sm:px-6 md:pb-32"
            style={{ marginTop: '-80px', paddingTop: 'calc(80px + 4rem)', clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)' }}
        >
            <div className="mx-auto w-full max-w-[1600px] lg:px-8 2xl:px-16">

                <AnimateOnScroll>
                    <span className="eyebrow text-base md:text-lg">Lokalizacja</span>
                    <h2 className="display-heading pt-2 text-4xl sm:text-5xl lg:text-6xl">
                        Gdzie trenujemy?
                    </h2>
                    <div className="mt-5 h-1.5 w-20 bg-court-panel sm:w-24"></div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={150}>
                    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {locations.map(({ name, address, href }) => {
                            const inner = (
                                <div className="flex h-full flex-col gap-4 rounded-2xl bg-court-white/8 p-6 ring-1 ring-court-white/10 transition-colors hover:bg-court-white/12">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-court-panel/25 text-court-panel">
                                        <PinIcon />
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-lg font-black text-court-white">{name}</p>
                                        <p className="mt-1 text-base text-court-white/60">{address}</p>
                                    </div>
                                    {href && (
                                        <span className="text-sm font-bold text-court-panel">
                                            Otwórz w Mapach →
                                        </span>
                                    )}
                                </div>
                            );
                            return href ? (
                                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="block">
                                    {inner}
                                </a>
                            ) : (
                                <div key={name}>{inner}</div>
                            );
                        })}
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={250}>
                    <span className="eyebrow mt-10 block text-base md:text-lg">
                        Zapisy telefonicznie lub przez Social Media
                    </span>
                </AnimateOnScroll>

            </div>
        </section>
    );
}
