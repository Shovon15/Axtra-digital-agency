import { Outlet } from "react-router-dom"
// import Header from "../components/shared/header"
import Navbar from "../components/shared/Navbar/Navbar"
import Footer from "../components/shared/Footer"

const Main = () => {
    return (
        <div className="">
            {/* <Header /> */}
            <Navbar />
            <div className="max-w-[1560px] mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main