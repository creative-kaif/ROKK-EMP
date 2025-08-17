import { motion } from "motion/react"
import TFLogo from "../assets/img/LogoTF.png"

const Hero = () => {
    return (
        <div className="hero-section h-full relative">
            <div className="container py-6 px-6 mx-auto">
                <div className="max-md:mt-40 mt-14 text-center">
                    <motion.h1
                        initial={{ y: 70, opacity: 0, }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-8xl max-w-6xl max-md:text-5xl mx-auto font-TitlingGothicFB text-white tracking-wider leading-none uppercase">
                        Dein Sound. Deine Bands. Dein Vorteil.
                    </motion.h1>
                    <motion.p
                        initial={{ y: 70, opacity: 0, }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-4 font-Poppins-Regular text-center tracking-normal leading-[34px] max-md:text-[16px] max-md:leading-[28px] text-2xl max-w-3xl mx-auto text-black-50">
                        Als Mitglied im <span className="text-Orange-200">EMP Backstage Club</span> erhältst du jetzt <span className="text-Orange-200">90 Tage lang völlig kostenlos</span> exklusiven Zugang zu ROKK – der fairen Rock- und Metal-Streamingplattform, entwickelt von Musikern für echte Musikfans – und danach streamst du weitere <span className="text-Orange-200">drei Monate für nur 6, 66 € pro Monat. *</span>
                    </motion.p>
                    <br />
                    {/* <motion.p
                        initial={{ y: 70, opacity: 0, }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-2 font-TitlingGothicFB uppercase text-center tracking-wide leading-[32px] max-md:text-[24px] max-md:leading-[28px] text-3xl max-w-[240px] max-md:max-w-[180px] mx-auto text-black-50">
                        Get <span className="text-Orange-200 ">3 Months Free</span>  of ROKK HIFI
                    </motion.p> */}
                    <motion.div
                        initial={{ y: 30, opacity: 0, }}
                        animate={{ y: 0, opacity: 1, }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="mt-16 max-md:mt-10 relative">
                        <div className="relative text-center">
                            <a href="https://services.rokk-api.com/?ref=heavys"
                                className=" shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-4 max-md:text-sm max-md:w-[300px] py-6 px-12 rounded-full bg-Orange-200  text-white tracking-[1px] uppercase text-lg hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">
                                Jetzt 90 Tage gratis testen
                            </a>
                        </div>

                        <div className="flex items-center justify-center opacity-50">
                            <p className=" relative mt-12 max-md:mt-8 max-md:text-sm font-Poppins-Regular text-white text-lg text-center"><span className="">*10,99 €/Monat</span> danach – jederzeit kündbar</p>

                        </div>

                        <div className="flex items-center justify-center">
                            <p className="flex items-center relative mt-12 max-md:mt-8 max-md:text-sm font-Poppins-Regular text-white text-lg text-center">Exklusiv für <img
                                src={TFLogo} className="w-32 p-2" alt="" />BSC Mitglieder</p>

                        </div>
                    </motion.div>



                </div>
            </div>
        </div>
    )
}
export default Hero
