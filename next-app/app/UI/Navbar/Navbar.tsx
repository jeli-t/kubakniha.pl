import classes from "./Navbar.module.css"

export function Navbar() {
    return (
        <div className="flex justify-center h-fit text-court-white">
            <div className="navbar fixed z-40 w-full max-w-[1600px] rounded-b-3xl bg-court-white px-4 text-court-deep shadow-xl">
                <div className="flex-1">
                    <a className="font-display text-lg font-black italic md:text-2xl" href="">Jakub Knihinicki</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-0 font-display text-sm font-black italic uppercase md:px-1 md:text-base">
                    <li><a className="px-2 hover:bg-court-orange hover:text-court-white md:px-4" href="/#treningi">Treningi</a></li>
                    <li><a className="px-2 hover:bg-court-orange hover:text-court-white md:px-4" href="/#o-mnie">O mnie</a></li>
                    <li><a className="px-2 hover:bg-court-orange hover:text-court-white md:px-4" href="/#kontakt">Kontakt</a></li>
                    </ul>
                </div>
            </div>
            <div className={classes.bg_fade_out}></div>
        </div>
    )
}

