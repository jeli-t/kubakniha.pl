import Image from "next/image";
import InstagramIcon from './ig.png'
import FacebookIcon from './fb.png'

export function Contact() {
    return (
        <div id="kontakt" className="flex items-center justify-center w-full min-h-fit pt-16 pb-16 scroll-m-28 bg-zinc-700">
            <div className="w-full flex items-center justify-between align-center max-w-7xl p-4 flex-col md:flex-row-reverse gap-4">
                <div className="w-full md:w-1/2">
                    <span className="text-md md:text-lg tracking-widest font-bold text-sky-400">KONTAKT</span>
                    <h3 className="text-left text-2xl md:text-3xl font-semibold">
                        Chcesz zapisać się na trening?
                        <br />
                        Masz jakieś pytania?
                    </h3>
                </div>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <h4 className="text-2xl font-semibold ">Telefon:</h4>
                            <a className="text-lg text-sky-400" href="tel:+48782795254">782 795 254</a>
                            <h4 className="text-2xl font-semibold mt-8">E-mail:</h4>
                            <a className="text-lg text-sky-400" href="mailto:kubakniha.bad@wp.pl">kubakniha.bad@wp.pl</a>
                            <div className="flex justify-center mt-8">
                                <Image
                                    src={InstagramIcon}
                                    className="w-8 h-8 mr-2"
                                    alt= "Instagram"
                                    width={32}
                                    height={32}
                                />
                                <a className="text-lg text-sky-400 leading-8" href="https://www.instagram.com/kubakniha/">kubakniha</a>
                            </div>
                            <div className="flex justify-center mt-8">
                                <Image
                                    src={FacebookIcon}
                                    className="w-8 h-8 mr-2"
                                    alt= "Facebook"
                                    width={32}
                                    height={32}
                                />
                                <a className="text-lg text-sky-400 leading-8" href="https://www.facebook.com/jakub.knihinicki.3">Jakub Knihinicki</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}