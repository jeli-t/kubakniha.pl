import Image from "next/image";
import InfinitiImg from './infiniti.png'

export function Sponsors() {
    return (
        <div className="flex items-center justify-center w-full min-h-fit mb-60">
            <div className="w-full flex items-center justify-center align-center max-w-7xl p-4 flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <span className="text-md md:text-lg tracking-widest font-bold text-sky-400">Partnerzy</span>
                    <h2 className="text-left text-2xl md:text-3xl font-semibold">
                        Dumnie wspieramy przez:
                    </h2>
                </div>
                <a target="_blank" href="https://infiniti-fit.pl/strona-glowna-infiniti">
                    <Image
                        src={InfinitiImg}
                        className="w-32 h-32 md:w-64 md:h-64"
                        alt= "Infiniti Centrum Zdrowia"
                    />
                </a>
            </div>
        </div>
    )
}