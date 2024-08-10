import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "../layouts/main"
import HomePage from "../pages"
import NotFound from "../pages/notFound"
// import ScrollToTop from "../hooks/StartTop"

const MainRoutes = () => {
    return (
        <BrowserRouter>
            {/* <ScrollToTop /> */}
            <Routes>
                <Route element={<Main />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                />
            </Routes>
        </BrowserRouter>

    )
}

export default MainRoutes