import { FC } from "react";
import headerImg from "assets/our-story/header.png";

export const Faq: FC = () => {

    return (
        <div className="pb-[20px]">
            <div className="h-[400px] text-white grid place-items-center">
                <img src={headerImg} className="w-full absolute top-0 z-[-1]" />
                <h2 className="text-white text-[65px] font-bold">Frequently Asked Questions (FAQs)</h2>
            </div>

            <div className="bg-white pt-[10px]">
                <div className="flex justify-center">
                    <div className="bg-[#007B7C] text-white text-[50px] w-[850px] text-center rounded">Ask us Anything</div>
                </div>

                <div className="text-center text-[36px] mt-[20px]">
                    Have any questions? We're here to assist you.
                </div>

                <div className="flex justify-center mt-[80px]">
                    <article className="prose max-w-[800px]">
                        <h3>How are the materials in the Resource Center selected?</h3>

                        <p>
                            The Better Evidence Project's goal is to help scholarly research and application become complementary and integrated. We envision a fluid process-where evidence drives implementation and the application of new theories and innovative programs form the basis of new evidence.  The Better Evidence Project, therefore, seeks to make available resources that provide evidence, insights, analysis, experience, and in-depth research and about what has worked and not worked in efforts to end wars, prevent violence, and build sustainable peace. Our sources are chosen and curated in the following ways:
                            <ol>
                                <li>Each member of our Research Team seeks to find resources about specific themes and cases assigned to her/him.  That may be done via searching bibliographies as well as important articles, reports, monographs, documents or books.  Researchers also connect with scholars and practitioners seeking suggestions for resources.</li>
                                <li>The materials will in most cases by drawn from: Peer-reviewed scholarship; resources produced, sponsored or published by respected organizations; government documents (white papers, policy briefs, impact assessments); projects supported by respected donors (evaluations, project reports); data bases; and footnotes and other materials referenced in the above documents.</li>
                                <li>An informative abstract is provided for each source with a synopsis of the material while highlighting key themes and conclusions.</li>
                                <li>Better Evidence Project senior staff work to bridge theory and practice, and practitioners with each other.  The staff is constantly seeking new resources and probing with practitioners the types of evidence and knowledge they are seeking in order to strengthen their work in addressing conflict and making peace.</li>
                                <li>The Better Evidence Project works with partner organizations in order to link to, promote and ultimately store new materials that provide evidence of what works and what does not in the broader war prevention and peacemaking fields.</li>
                                <li>The Better Evidence Project also develops and houses special collections of materials or data not available elsewhere that are developed by partner organizations or affiliated scholars.</li>
                            </ol>
                        </p>

                        <h3>What makes the BEP search engine unique?</h3>

                        <p>
                            The Better Evidence Project's search engine stands out for its unique commitment to being the resource hub for promoting peace and understanding. The search leverages a cutting-edge artificial intelligence technology to provide answers to any questions that individuals may have regarding conflict resolution, peace-building, and related topics. Unlike traditional search engines, the BEP search engine is specifically tailored to curate and deliver the most relevant, evidence-based resources and information, making it an effective destination for anyone seeking to contribute to global peace efforts.
                        </p>

                        <h3>If I cannot find what I am looking for, how can I get more help from the BEP staff?</h3>

                        <p>
                            If you cannot find the resources you are looking for or you want assistance in finding what other types of resources might be available, the Better Evidence Project Research Team may be able to help if you make a request at this link here.
                        </p>

                        <h3>Can I send to the Better Evidence Project documents, articles or papers for consideration to be included in the Resource Center?</h3>

                        <p>
                            Yes.  Our Resource Center is constantly growing as we add more and more curated resources to our repository.  Please send us any documents or sources that would fit our criteria for selection (see above).  Additionally, we encourage any organization that wishes to add materials to our Resource Center to contact us about becoming a partner organization so that we can promote relevant materials and provide you with tracking data regarding materials that are downloaded.
                        </p>

                        <h3>How often are new resources added to the BEP site?</h3>

                        <p>
                            We are constantly seeking new materials to add to the Resource Center.  Our goal is to make new materials available on a weekly basis.  We also promote and publicize such resources when the scope and depth of specific issue areas, themes or cases are strengthened and when we put together a special collection of tailored resources that are useful evidence for ending war, preventing violence and building sustainable peace.  Our aim is to have new materials added every week.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
}
