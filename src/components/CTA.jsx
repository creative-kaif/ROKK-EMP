import React from 'react'
import { motion } from "motion/react";

const Cta = () => {
    return (
        <div className="cta-section pt-24 pb-12 max-md:pt-18 max-md:pb-6 bg-gradient-to-b from-black-300 from-0% to-black-500 to-75%">
            <div className="container mx-auto px-8 max-md:px-4">
                <motion.div initial={{ y: 50, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: -40, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="cta-body card bg-black-100 p-[2px] rounded-3xl hover:bg-gradient-to-r ease-in  bg-gradient-to-l from-Orange-200 to-black-100/10">
                    <div className="cta p-[1px] bg-black-100 rounded-3xl">
                        <div className="grid grid-cols-6 max-md:grid-cols-1 max-lg:grid-cols-1 gap-0 p-12 max-md:p-6 py-16 items-center">
                            <div className="col-span-4">
                                <h1 className="text-5xl max-md:text-center font-TitlingGothicFB max-w-xl max-md:text-4xl text-white tracking-wide leading-tighter uppercase">
                                    ROKK IST EIN MUSIK-STREAMINGDIENST – GEMACHT FÜR
                                    <span className="bg-gradient-to-r from-Orange-200 to-Orange-100 text-transparent bg-clip-text"> METAL UND ROCK </span>
                                    FANS
                                </h1>
                            </div>
                            <div className="col-span-2">
                                <div className="max-md:mt-8 max-lg:mt-14 max-md:mb-4 btn flex max-md:justify-center">
                                    <div className="relative ">
                                        <a href="https://services.rokk-api.com/?ref=heavys"
                                            className="  shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-3 max-md:mt-8 max-md:text-xs py-6 px-8 rounded-full bg-Orange-200  text-white tracking-[1px] uppercase max-md:text-sm text-lg hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">
                                            Jetzt 90 Tage gratis testen
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    )
}
export default Cta
