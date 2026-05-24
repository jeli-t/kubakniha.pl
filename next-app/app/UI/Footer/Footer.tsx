export function Footer() {
    return (
        <footer className="w-full bg-court-deep border-t border-court-white/10">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-6 lg:px-8 2xl:px-16">
                <ul className="flex flex-wrap items-center gap-1 font-display font-black italic uppercase">
                    <li><a className="sport-link px-2 py-1 text-sm md:text-base" href="/#treningi">Treningi</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm md:text-base" href="/#o-mnie">O mnie</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm md:text-base" href="/#kontakt">Kontakt</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm md:text-base" href="/polityka-prywatnosci">Polityka prywatności</a></li>
                </ul>
                <p className="text-sm text-court-white/40">
                    © 2026 Jakub Knihinicki · <a className="sport-link" href="https://jeli.pl" target="_blank">jeli.pl</a>
                </p>
            </div>
        </footer>
    )
}
