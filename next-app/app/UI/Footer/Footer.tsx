export function Footer() {
    return (
        <div className="flex justify-center h-fit text-white">
            <div className="footer place-items-center gap-4 z-40 max-w-7xl p-2 md:p-4 pb-8 md:pb-4 rounded-t-xl bg-base-200">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2 md:px-4">
                    <li><a className="px-2 md:px-4 text-sky-400">Treningi</a></li>
                    <li><a className="px-2 md:px-4 text-sky-400">O mnie</a></li>
                    <li><a className="px-2 md:px-4 text-sky-400">Kontakt</a></li>
                    <li><a className="px-2 md:px-4 text-sky-400">Polityka prywatności</a></li>
                    </ul>
                </div>
                <div className="flex-1">
                    <div>
                        <a className="">Copyright © 2024 Jakub Knihinicki.</a>
                        <br />
                        Powered by <a target="_blank" className="text-sky-400" href="https://jeli.pl">jeli.pl</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

