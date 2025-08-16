import {useState} from "react";
import Element from "../assets/img/dot-element.png"

const Accordion = ({accordionItems}) => {
const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index );
}
    return (
        <div className="accordion">
            {
                accordionItems.map((item, i) => {
                    return (
                        <div  key={i} className="accordion-section  ">
                            <div onLoad={() => toggleAccordion(i)} className={`accordion-items pl-24 max-md:pl-10 py-4 border-l-4 border-Orange-200
                                ${activeIndex === i
                                ? "active-item border-l-2 border-Orange-200"
                                : "border-l-2 border-black-200"
                            }`}
                            >

                                < button className={` headline flex items-center w-full  first:text-7xl last:bg-red-600 
                                ${activeIndex === i ? "active" : ""}`}
                                         onClick={() => toggleAccordion(i)}>
                                    {activeIndex === i ?
                                        <span onLoad={() => toggleAccordion(i)}><img src={Element} className="absolute w-11 -ml-[120px] -mt-7 max-md:hidden"
                                                   alt=""/></span>
                                        :
                                        <span onLoad={() => toggleAccordion(i)}><img src={Element} className=" hidden  max-md:hidden"
                                                   alt=""/></span>
                                    }


                                    <h2 className={`cursor-pointer max-md:text-4xl first-child:text-5xl py-0 mr-6 max-w-sm text-left bg-transparent uppercase tracking-wider items-center w-full font-TitlingGothicFB text-3xl leading-none hover:text-Orange-100
                                ${activeIndex === i
                                        ? "uppercase    max-w-lg text-5xl text-white"
                                        : "capitalize  max-sm:text-3xl opacity-100 text-black-150 max-md:my-[-10px] my-[-4px] text-3xl hover:text-white"
                                    }`}>
                                        <span>
                                            {/*<img src="../assets/img/dot-element.png" alt=""/>*/}
                                        </span>
                                        {item.title}</h2>
                                </button>
                                <div  className={`content
                                ${activeIndex === i ? "open" : ""}
                                `}>
                                    <div className="content-paragraph">
                                        <p className={`transition-all ease-in mt-2 text-black-150 font-Poppins-Regular max-md:text-md text-base max-w-sm leading-7`}>
                                            {item.desc}
                                        </p>
                                        <div className="mt-12 mb-6">
                                            <a href="https://services.rokk-api.com/?ref=heavys" className="font-Poppins-Bold py-3 px-6 rounded-full border-2 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-Orange-200 hover:text-black-400 transition-all">FREE TRIAL</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            );
                            })
                            }
                        </div>
                    )


                }

                export default Accordion
