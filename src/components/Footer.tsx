import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import titleImg from "assets/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="bg-[#201D1D] p-10 text-white text-[20px]">
            <div className="flex justify-center">
                <div className="flex space-x-[70px]">
                    <div className="flex flex-col items-center">
                        <img src={titleImg} className="min-w-[400px] min-h-[115px]" />
                        <div className="text-[25px] font-bold">Ideas with Impact</div>
                        <div className="space-x-[22px] mt-[60px]">
                            <a href="https://www.facebook.com/georgemason" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} className="w-[40px] h-[40px]" />
                            </a>
                            <a href="https://twitter.com/GeorgeMasonU" target="_blank">
                                <FontAwesomeIcon icon={faXTwitter} className="w-[40px] h-[40px]" />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-[30px]">
                        <div className="text-[25px] font-bold">Home</div>
                        <ul className="space-y-[18px]">
                            <li><Link to="/our-story">Our Story</Link></li>
                            <li><Link to="/search">Resource Center</Link></li>
                            <li><a href="">Get Involved</a></li>
                        </ul>
                    </div>
                    <div className="space-y-[30px]">
                        <div className="text-[25px] font-bold">Support</div>
                        <ul className="space-y-[18px]">
                            <li><a href="https://info.gmu.edu/campus-information/university-switchboard/#SkypeChat" target="_blank">Contact Via Skype</a></li>
                            <li><a href="https://diversity.gmu.edu/title-ix" target="_blank">Title IX</a></li>
                            <li><a href="https://accessibility.gmu.edu/" target="_blank">Accessibility</a></li>
                            <li><a href="https://jobs.gmu.edu/" target="_blank">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-[30px]">
                        <div className="text-[25px] font-bold">Contact us</div>
                        <ul className="space-y-[18px]">
                            <li className="flex items-start space-x-[20px]">
                                <MapPinIcon className="w-[20px] w-[20px] mt-[6px]" />
                                <a href="geo:38.828937,-77.3076945">
                                    4400 University Dr,<br />
                                    Fairfax, VA 22030
                                </a>
                            </li>
                            <li className="flex items-start space-x-[20px]">
                                <EnvelopeIcon className="w-[20px] w-[20px] mt-[6px]" />
                                <a href="mailto:bep@gmu.edu">Email: bep@gmu.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="md:flex md:justify-around border-t text-[18px] mt-10 pt-4 mb-20">
                <div>&copy; George Mason University</div>
                <ul className="md:flex md:divide-x">
                    <li className="px-2 text-[#A4A4A4]">All Rights Reserved</li>
                    <li className="px-2"><a href="https://www.gmu.edu/about-mason/internet-privacy" target="_blank">Terms and Conditions</a></li>
                    <li className="px-2"><a href="https://www.gmu.edu/about-mason/internet-privacy" target="_blank">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}
