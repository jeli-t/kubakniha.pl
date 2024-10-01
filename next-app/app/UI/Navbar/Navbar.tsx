export function Navbar() {
    return (
        <div className="flex justify-center h-fit">
            <div className="navbar fixed max-w-6xl px-2 md:px-4 rounded-b-xl bg-sky-500">
                <div className="flex-1">
                    <a className="text-md md:text-xl">Jakub Knihinicki</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-0 md:px-1">
                    <li><a className="px-2 md:px-4">O mnie</a></li>
                    <li><a className="px-2 md:px-4">Treningi</a></li>
                    <li><a className="px-2 md:px-4">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

