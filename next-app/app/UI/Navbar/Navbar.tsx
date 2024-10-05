import classes from "./Navbar.module.css"

export function Navbar() {
    return (
        <div className="flex justify-center h-fit text-white">
            <div className="navbar fixed z-40 max-w-7xl px-4 rounded-b-xl bg-sky-500">
                <div className="flex-1">
                    <a className="text-md md:text-xl font-bold" href="">Jakub Knihinicki</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-0 md:px-1">
                    <li><a className="px-2 md:px-4" href="/#treningi">Treningi</a></li>
                    <li><a className="px-2 md:px-4" href="/#o-mnie">O mnie</a></li>
                    <li><a className="px-2 md:px-4" href="/#kontakt">Kontakt</a></li>
                    </ul>
                </div>
            </div>
            <div className={classes.bg_fade_out}></div>
        </div>
    )
}

