import Mockup2 from '../assets/img/mockup-2.png'
import Andriod from '../assets/img/google-download-btn.png'
import Apple from '../assets/img/apple-download-btn.png'
import { motion } from "motion/react";

const Download = () => {
    return (
        <div className="download-app bg-black-300">
            <div className="container mx-auto max-md:px-6">
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                    <div className="flex text-center justify-self-end max-md:justify-self-center">
                        <img className="w-[540px] max-md:w-[300px]" src={Mockup2} alt="" />
                    </div>
                    <motion.div
                        initial={{ x: -50, opacity: 0, }}
                        animate={{ x: 0 }}
                        whileInView={{ opacity: 1, x: 10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="content-body my-auto mx-auto max-md:text-center">
                        <h1 className="text-6xl font-TitlingGothicFB max-w-md max-md:text-5xl text-white tracking-wide leading-none uppercase">
                            MUSIK. JEDERZEIT UND ÜBERALL
                        </h1>
                        <p className={` transition-all ease-in mt-2 text-black-150 font-Poppins-Regular max-md:text-base text-base max-w-md leading-7`}>
                            High-Quality-Downloads / Offline-Modus inklusive.   <span className="text-Orange-200">DApp jetzt herunterladen</span>
                        </p>
                        <motion.div
                            className=" flex download-btn mt-14 max-md:mx-auto max-md:justify-center">
                            <div className="flex">
                                <a href="https://play.google.com/store/apps/details?id=app.rokk.web&hl=en_IN&pli=1"
                                    className="bg-white p-5 px-8 max-md:px-6 rounded-full">
                                    <img className=" h-7 max-md:h-6" src={Andriod} alt="" /></a>
                                <a href="https://apps.apple.com/cz/app/rokk-streaming/id6448976457"
                                    className="ml-4 bg-white p-5 px-8 max-md:px-6  rounded-full">
                                    <img className="h-7 max-md:h-6" src={Apple} alt="" />
                                </a>

                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Download
