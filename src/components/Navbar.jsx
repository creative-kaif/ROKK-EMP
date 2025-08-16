import logo from "../assets/img/logo-white.png";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 py-12 max-md:py-4  ">
            <div className="container px-4 max-md:px-8 md:px-4 mx-auto relative text-sm">
                <div className="flex justify-center items-center">

                    <div className="">
                        <img className="w-[600px] max-md:w-full" src={logo} alt="" />
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar
