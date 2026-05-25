export function Footer() {
    return (
        <footer className="w-full bg-court-deep border-t border-court-white/10">
            <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-4 px-5 py-8 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6 lg:px-8 2xl:px-16">
                <ul className="flex flex-wrap gap-x-1 gap-y-2 font-display font-black italic uppercase">
                    <li><a className="sport-link px-2 py-1 text-sm" href="/#treningi">Treningi</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm" href="/#o-mnie">O mnie</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm" href="/#kontakt">Kontakt</a></li>
                    <li><a className="sport-link px-2 py-1 text-sm" href="/polityka-prywatnosci">Polityka prywatności</a></li>
                </ul>
                <p className="px-2 text-sm text-court-white/40 sm:text-right">
                    © 2026 Jakub Knihinicki · <a className="sport-link" href="https://jeli.pl" target="_blank">jeli.pl</a>
                </p>
            </div>
        </footer>
    )
}
