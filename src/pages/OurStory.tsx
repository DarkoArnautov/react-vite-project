import { FC } from "react";
import headerImg from "assets/our-story/header.png";

export const OurStory: FC = () => {

    return (
        <div className="pb-[20px]">
            <div className="h-[400px] flex justify-center items-center">
                <img src={headerImg} className="w-full absolute top-0 z-[-1]" />
                <h2 className="text-[75px] text-white font-bold">Our Story</h2>
            </div>

            <div className="bg-white pt-[10px]">
                <div className="flex justify-center">
                    <article className="prose max-w-[800px]">
                        <p>
                            The problems of war and violence urgently require the concerted efforts of donors, policy makers, practitioners, and scholars in the peacebuilding community.
                            Such efforts must be guided by informed understandings of what works effectively to prevent wars and resolve conflict.
                        </p>
                        <p>
                            To that end, at the Jimmy and Rosalynn Carter School for Peace and Conflict Resolution, with the generous support of Milt Lauenstein, the idea for the Better
                            Evidence Project resulted from a meeting of leading academics, practitioners, and funding organizations held at Point of View, the Carter School's academic
                            retreat center in February 2020.  The Better Evidence Project is focused on evidence from two high priority areas: indicators of change that reflect 1) success
                            in conflict resolution, war prevention, and sustainable peacemaking efforts, and 2) learning from local peacebuilding successes. As a key program in the Carter
                            School's Center for Peacemaking Practice, the Better Evidence Project curates, makes available and promotes the expertise of scholars, local peacemakers, global
                            practitioners, donors, and policy makers, together seeking maximum practical impact in improving conflict resolution practice.
                        </p>
                    </article>
                </div>

                <div className="flex justify-center mt-[100px]">
                    <h2 className="text-[75px] font-bold">Our Staff</h2>
                </div>

                <div className="mt-[100px] flex justify-center">
                    <div className="bg-[#007B7C] w-[850px] h-[82px] rounded-[5px] text-[50px] text-center">Meet Our Team</div>
                </div>

                <div className="flex justify-center mt-[100px]">
                    <article className="prose max-w-[800px]">
                        <h2>Executive Director: Jeffrey W. Helsing, PhD</h2>

                        <p>
                            Dr. Jeffrey Helsing is Executive Director of the Better Evidence Project and Research Associate Professor in the Jimmy and Rosalynn Carter School for Peacebuilding
                            and Conflict Resolution. Prior to joining the Carter School, he spent 23 years at the United States Institute of Peace, including as Associate Vice President where
                            he led USIP's education and training programs as well as curriculum development that included conflict resolution training for civil society organizations,
                            peacebuilding practitioners, youth and religious leaders, humanitarian aid workers, diplomats and military and police. Helsing was instrumental in the expansion of
                            USIP's education and training efforts in conflict zones around the world, including the development of local training capacity and a large suite of on-line courses
                            in multiple languages.
                        </p>
                        <p>
                            Working at the nexus of peacebuilding research, practice, and policy, he has worked to bridge theory and practice. Helsing has almost three decades of work as a
                            trainer in conflict resolution and peacebuilding, including conflict analysis, negotiations, mediation, conflict prevention, cultural competence, facilitation skills
                            and non-violence, particularly in the Middle East and Southeast Asia but also in Africa, Europe, South Asia, and Colombia. He has written about conflict in the Middle
                            East, as well as about the role of education in peace processes, and peace education.
                        </p>
                        <p>
                            Human Rights and Conflict, which he co-edited with human rights scholar Julie Mertus, was one of the first scholarly attempts to explore the links between human rights,
                            humanitarian law and peacebuilding.  Helsing also has considerable experience as an educator, including five years in the Department of Political Science at the
                            American University in Cairo as well as teaching courses at American University, George Washington University, Swarthmore College and the University of Pennsylvania.
                            Helsing holds a B.A. in history from Stanford University and a Ph.D. in political science from Columbia University.
                        </p>

                        <h2>Program Associate: Kamila Elyazgi</h2>

                        <p>
                            Kamila Elyazgi is a current master's student in the Carter School pursuing an M.S. in Conflict Analysis and Resolution.  She recently received her BA in Conflict Analysis
                            and Resolution from the Carter School where she concentrated in Human Rights & Justice and Global Engagement.  Kamila has worked as a Research Assistant at the Harvard
                            Academy for International and Area Studies and currently works as an intern at Connell Law, LLC, where she provides research and writing support for the Military
                            Commissions Defense Organization team.
                        </p>

                        <h2>Fall 2023</h2>

                        <ul>
                            <li>Heejoo Cheon</li>
                            <li>Philippa Crooks</li>
                            <li>Isabella Cuevas</li>
                            <li>Engy Muhammad</li>
                            <li>Geoffrey Thomas</li>
                            <li>Owais Yousuf</li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    );
}
