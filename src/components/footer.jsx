import React from 'react'
import logo from "../assets/img/logo-white.png";
import Fb from "../assets/img/fb-icon.png";
import Insta from "../assets/img/insta-icon.png";
import Youtube from "../assets/img/youtube-icon.png";


const Footer = () => {
    return (
        <div className="footer-section pt-6 pb-12 bg-black-500">
            <div className="container px-8 max-md:px-8 md:px-6 mx-auto relative text-sm">
                <div className="footer">
                    <div className="grid grid-cols-2  gap-6 justify-between items-center pb-12 mx-auto">

                        <div className="col-span-1 max-sm:col-span-2 max-lg:col-span-2 gap-6 justify-start max-md:justify-center ">
                            <img className="col-span-1 max-w-[500px]  max-md:w-full" src={logo} alt="" />
                        </div>
                        <div className="flex col-span-1 max-sm:col-span-2 max-lg:col-span-2 gap-6 justify-end max-md:justify-center items-center">
                            <a href="https://www.youtube.com/@ROKKSTREAMING"
                                className="pl-6 max-md:pl-3  rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Youtube} alt="" />
                            </a>
                            <a href="https://www.instagram.com/rokkstreaming/"
                                className="pl-6 max-md:pl-3  rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Insta} alt="" />
                            </a>
                            <a href="https://www.facebook.com/rokkstreamingapp"
                                className="pl-6 max-md:pl-3 rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Fb} alt="" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="h-[2px] bg-black-200"></div>
                <div className="footer-2 mt-12 max-md:mt-8">
                    <div className="flex max-md:block max-md:text-center  justify-between items-center">
                        <div className="copyright">
                            <a href=""
                                className="text-black-50 font-Poppins-Regular text-base">
                                © 2025 ROKK. All Right Reserved.
                            </a>
                        </div>
                        <div className="max-md:mt-6 terms">
                            <a href="https://rokk-app.com/privacy-policy"
                                className="text-black-50 font-Poppins-Regular text-base ">
                                Privacy Policy
                            </a>
                            <a href="https://rokk-app.com/terms-of-use"
                                className="ml-10 text-black-50 font-Poppins-Regular text-base ">
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
