import React from 'react'
import Accordion from "./Accordion.jsx";
import Img from "../assets/img/mockup-img.png";
import Icon from "../assets/img/logo-icon.png";
import imgOne from "../assets/img/mockup-img.png";
import imgTwo from "../assets/img/logo-white.png";
import { motion } from "motion/react";
import { useTranslation } from 'react-i18next';


const Why = () => {
    const { t } = useTranslation();

    const accordionItems = [
        {
            id: 1,
            title: t('general.bandsGenresTitle'),
            image: { imgOne },
            desc: t('general.bandsGenresDesc'),
        },
        {
            id: 2,
            title: t('general.otherGenresTitle'),
            image: { imgTwo },
            desc: t('general.otherGenresDesc'),
        },
        {
            id: 3,
            title: t('general.highQualityAudio'),
            desc: t('general.qualityDesc'),
        },
        {
            id: 4,
            title: t('general.morePerStream'),
            desc: t('general.morePerStreamDesc'),
        },
        {
            id: 5,
            title: t('general.directSupport'),
            desc: t('general.directSupportDesc'),
        },
        {
            id: 6,
            title: t('general.playlistImport'),
            desc: t('general.playlistImportDesc'),
        },
    ];
    return (
        <motion.div
            initial={{ y: 100, opacity: 0, }}
            animate={{ y: -100, }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="div">
            <section
                className="why-rokk-section w-screen h-full bg-gradient-to-b from-black-400/0 from-0% to-black-400 to-25% text-Orange-200 z-50">
                <div className="container px-4 max-md:px-6 mx-auto">
                    <div className="pt-32 pb-44 max-md:pb-32 max-md:pt-12">
                        <h5 className="ml-3 text-4xl max-md:text-2xl max-md:tracking-wide font-TitlingGothicFB text-white uppercase text-center items-center">{t('general.why')} <span><img
                            src={Icon} className="relative w-9 inline items-center max-md:w-6 max-md:mx-1 mx-3 mb-2"
                            alt="" /></span> Rokk ?</h5>


                        <div
                            className="mt-24 max-md:mt-12 max-lg:mt-12 grid grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1 gap-0 p-0">
                            <div className="relative h-fit text-right mx-auto my-auto">
                                <img className="max-w-[420px] max-md:w-[280px]" src={Img} alt="img" />
                            </div>
                            <div className="p-0 max-md:mt-12 max-lg:mt-14 max-lg:mx-auto">
                                <div className="p-0">
                                    <Accordion accordionItems={accordionItems}>

                                    </Accordion>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </motion.div>


    )
}
export default Why
