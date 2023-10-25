import { FC } from "react";
import { Link } from "react-router-dom";
import welcomeImg from "assets/home/welcome.png";
import headerImg from "assets/home/header.png";
import libraryImg from "assets/home/library.png";
import booksImg from "assets/home/books.png";
import audioVideoImg from "assets/home/audio-video.png";
import librarySvg from "assets/home/library.svg";
import multimediaSvg from "assets/home/multimedia.svg";
import growthSvg from "assets/growth.svg";
import getInvolved from "assets/home/get-involved.png";

export const Home: FC = () => {
    return (
        <div className="">
            <img src={headerImg} className="w-full absolute top-0 z-[-1]" />

            <div className="flex justify-center mt-[390px]">
                <div className="flex w-[1225px] relative shadow-md">
                    <div className="flex-none w-[700px] h-[700px] text-white bg-black p-[50px] flex flex-col justify-end space-y-[25px]" style={{ backgroundImage: `url('${welcomeImg}')` }}>
                        <h2 className="text-[40px] font-bold">Welcome To<br />The Better Evidence</h2>
                        <p className="text=[18px]">Curating Useful and Impactful Evidence to Inform Peacemaking Practice.</p>
                        <p>
                            BEP's mission is to identify and make accessible multiple types of resources that influence policy and action, and ensure resources are allocated effectively.
                            The BEP team investigates, curates and synthesizes knowledge and practice while also facilitating connections between academics and practitioners to exchange ideas and lessons learned.
                        </p>
                    </div>
                    <div className="flex-auto bg-white flex flex-col justify-end p-[50px] space-y-[20px]">
                        <div className="prose">
                            <p>
                                Housed in the <a href="https://carterschool.gmu.edu/research-impact/centers/center-peacemaking-practice">Center for Peacemaking Practice</a> within
                                the <a href="https://carterschool.gmu.edu/">Carter School for Peace and Conflict Resolution</a> at <a href="https://www.gmu.edu/">George Mason University</a>,
                                BEP, through its Resource Center, BEP curates and constantly updates a wide array of evidence-based materials to enable practitioners, donors, and policymakers,
                                to strengthen their efforts to end wars, prevent armed conflicts and build sustainable peace.
                            </p>
                            <p>
                                BEP seeks to bring together and promote evidence from around the world about what types of peacemaking efforts succeed under what kinds of contexts, BEP supports
                                those who will decrease warfare. BEP is focused on results. When peacemaking is guided by evidence-based insights, it will be more effective in preventing and
                                ending wars, and there will be fewer costs of war.
                            </p>
                        </div>
                        <div>
                            <Link to="/our-story" className="inline-block bg-[#FCBD0E] text-white px-[50px] py-[15px] mt-[20px]">Our Story</Link>
                        </div>
                    </div>
                    <div className="w-[520px] h-[600px] bg-[#E4D5C0]/[.15] absolute right-[-85px] bottom-[-60px] z-[-1]"></div>
                </div>
            </div>

            <div className="relative h-[883px] mt-[60px]">
                <img src={libraryImg} className="h-[883px] w-[799px] absolute right-0 z-[-1]" />

                <div className="flex justify-center">
                    <div className="w-[1040px] h-[136px] bg-[#007B7C] text-white text-[24px] rounded-[10px] mt-[50px] flex justify-evenly items-center">
                        <div className="flex space-x-[24px] items-center">
                            <div className="w-[60px] h-[60px] bg-white rounded-[30px] flex justify-center items-center">
                                <img src={booksImg} className="w-[32px] h-[32px]" />
                            </div>
                            <div>Resource Library</div>
                        </div>
                        <div className="flex space-x-[24px] items-center">
                            <div className="w-[60px] h-[60px] bg-white rounded-[30px] flex justify-center items-center">
                                <img src={audioVideoImg} />
                            </div>
                            <div>Audio & Video<br />Materials</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <div className="mt-[35px] pb-[12px] bg-[#007B7C] w-[912px] pl-[75px] pt-[35px] rounded-[10px] mr-[735px] pr-[100px] z-[-2] shadow-md">
                        <div className="flex flex-col space-y-[12px]">
                            <div className="flex space-x-[27px]">
                                <img src={librarySvg} className="h-[55px] w-[55px]" />
                                <div className="text-white text-[35px] font-bold">Resource Library</div>
                            </div>
                            <p className="text-[23px]">Our resource library hosts sources from our partners in the field, recommended studies for practitioners, policymakers, and donors and original BEP research.</p>
                        </div>

                        <div className="flex flex-col space-y-[12px] mt-[30px]">
                            <div className="flex space-x-[27px]">
                                <img src={multimediaSvg} className="h-[55px] w-[55px]" />
                                <div className="text-white text-[35px] font-bold">Audio & Video Materials</div>
                            </div>
                            <p className="text-[23px]">BEP provides access to informational movies and webinars. Watch for our upcoming materials coming soon, BEP Talks and BEP Podcast</p>
                        </div>

                        <div className="flex justify-center mt-[20px]">
                            <a href="#" className="bg-[#FFCC33] text-black text-[20px] font-bold rounded-[5px] px-[18px] py-[20px]">ALL RESOURCES</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[44px] bg-[#D9D9D9] pt-[100px] pb-[40px] flex flex-col items-center">
                <div className="text-[45px] text-bold">BEP Seeks To Decrease The<br /> Cost Of War</div>
                <p className="text-[23px] w-[922px] mt-[25px]">To that end, BEP seeks to bring together and promote evidence from around the world about what types of peacemaking efforts succeed under what kinds of contexts, BEP supports those who will decrease warfare. BEP is focused on results. When peacemaking is guided by evidence-based insights, it will be more effective in preventing and ending wars, and there will be fewer costs of war.</p>
                <div className="flex space-x-[100px] mt-[75px]">
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="text-[43px]">750+</div>
                            <img src={growthSvg} className="w-[64px] h-[64px]" />
                        </div>
                        <div>Monthly Website Visitors</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="text-[43px]">500+</div>
                            <img src={growthSvg} className="w-[64px] h-[64px]" />
                        </div>
                        <div>Titles in Resource Library</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="text-[43px]">1000+</div>
                            <img src={growthSvg} className="w-[64px] h-[64px]" />
                        </div>
                        <div>Video Viewers</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="text-[43px]">18</div>
                            <img src={growthSvg} className="w-[64px] h-[64px]" />
                        </div>
                        <div>Previously Hosted</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="mt-[28px] mb-[16px] flex relative">
                    <div>
                        <img src={getInvolved} className="w-[790px] h-[768px]" />
                    </div>
                    <div className="w-[790px] flex flex-col items-center">
                        <div className="text-[50px] font-bold">Get Involved</div>
                        <p className="mt-[40px] text-[20px] text-[#006633] italic text-center">Presenting Useful Evidence to Inform<br /> Peacemaking Practice</p>
                        <div className="mt-[60px] space-y-[20px] text-[23px] text-center w-[650px]">
                            <p className="">BEP invites partners to join us in harnessing useful research to prevent and end war.</p>
                            <p className="">Submit your research or suggest other materials for peer review for our Resource Library. Join our pool of reviewers who help discern sound evidence to add to the Resource Library.</p>
                            <p className="">Help us help peacemakers to be more effective.</p>
                        </div>
                        <div className="flex space-x-[30px] mt-[35px]">
                            <a href="mailto:bep@gmu.edu" className="px-[50px] py-[15px] bg-[#007B7C] text-[18px] text-white flex items-center">
                                Submit your work or become a reviewer
                            </a>
                        </div>
                    </div>
                    <div className="h-[680px] w-[400px] bg-[#E4D5C0]/[.15] absolute left-[-190px] top-[45px] z-[-1]"></div>
                </div>
            </div>
        </div>
    )
}