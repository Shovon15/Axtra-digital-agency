import { Outlet } from "react-router-dom"
// import Header from "../components/shared/header"
import Navbar from "../components/shared/Navbar/Navbar"

const Main = () => {
    return (
        <div className="">
            {/* <Header /> */}
            <Navbar />
            <div className="max-w-[1560px] mx-auto">
                <Outlet />
            </div>
            <div className="h-[1000px]">footer</div>
        </div>
    )
}

export default Main