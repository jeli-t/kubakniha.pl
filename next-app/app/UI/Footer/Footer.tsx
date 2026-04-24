export function Footer() {
    return (
        <div className="flex justify-center h-fit text-court-white">
            <div className="footer z-40 w-full max-w-[1600px] place-items-center gap-4 rounded-t-3xl bg-court-deep p-2 pb-8 shadow-2xl md:p-4 md:pb-4">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2 font-display font-black italic uppercase md:px-4">
                    <li><a className="sport-link px-2 md:px-4" href="/#treningi">Treningi</a></li>
                    <li><a className="sport-link px-2 md:px-4" href="/#o-mnie">O mnie</a></li>
                    <li><a className="sport-link px-2 md:px-4" href="/#kontakt">Kontakt</a></li>
                    <li><a className="sport-link px-2 md:px-4" href="/polityka-prywatnosci">Polityka prywatności</a></li>
                    </ul>
                </div>
                <div className="flex-1 text-court-line">
                    <div>
                        Copyright © 2026 Jakub Knihinicki.
                        <br />
                        Powered by <a target="_blank" className="sport-link" href="https://jeli.pl">jeli.pl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
