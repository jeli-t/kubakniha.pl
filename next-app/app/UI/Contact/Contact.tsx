import Image from "next/image";
import InstagramIcon from './ig.png'
import FacebookIcon from './fb.png'

export function Contact() {
    return (
        <div id="kontakt" className="section-band flex items-center justify-center w-full min-h-fit pt-16 pb-16 scroll-m-28">
            <div className="w-full flex items-center justify-between align-center max-w-7xl p-4 flex-col md:flex-row-reverse gap-4">
                <div className="w-full md:w-1/2">
                    <span className="eyebrow text-md md:text-lg">KONTAKT</span>
                    <h3 className="display-heading pt-2 text-left text-3xl md:text-5xl">
                        Chcesz zapisać się na trening?
                        <br />
                        Masz jakieś pytania?
                    </h3>
                </div>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1 bg-court-panel text-court-white">
                            <h4 className="font-display text-3xl font-black italic text-court-deep">Telefon:</h4>
                            <a className="sport-link text-lg" href="tel:+48782795254">782 795 254</a>
                            <div className="flex justify-center mt-8">
                                <Image
                                    src={InstagramIcon}
                                    className="w-8 h-8 mr-2"
                                    alt= "Instagram"
                                    width={32}
                                    height={32}
                                />
                                <a className="sport-link text-lg leading-8" href="https://www.instagram.com/j.knihinicki_badminton/">j.knihinicki_badminton</a>
                            </div>
                            <div className="flex justify-center mt-8">
                                <Image
                                    src={FacebookIcon}
                                    className="w-8 h-8 mr-2"
                                    alt= "Facebook"
                                    width={32}
                                    height={32}
                                />
                                <a className="sport-link text-lg leading-8" href="https://www.facebook.com/profile.php?id=61552974901285">Jakub Knihinicki - Instruktor badmintona </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
