import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Why from "./components/Why.jsx";
import Pricing from "./components/Pricing.jsx";
import Download from "./components/Download.jsx";
import Cta from "./components/CTA.jsx";
import Footer from "./components/footer.jsx";
import {motion} from "motion/react";
import Banner from "../src/assets/img/banner-2.png";


const App = () => {
    return (

        <main className="relative scroll-smooth overflow-x-hidden">

            <div className="overflow-x-hidden img absolute w-fit max-md:top-0 top-0 h-screen -z-50 ">
                <motion.img
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 1.4, delay: 0.4}}

                    src={Banner} className="w-100% bg-cover object-cover fixed z-0"
                    alt=""/>



            </div>
            <Navbar/>
            <Hero/>
            <Why/>
            <Pricing/>
            <Download/>
            <Cta/>
            <Footer/>
        </main>
    )
}
export default App
