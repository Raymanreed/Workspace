import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import App from '../App.tsx'
import TestPage from '../pages/testPages.tsx'
import NestedTestPage from '../pages/nestedTestPage.tsx'
import AnotherNestedTestPage from '../pages/anotherNestedTestPage.tsx'

function PageNavigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="test" element={<TestPage />}>
                        <Route path="nested" element={<NestedTestPage />} />
                        <Route path="anotherNested" element={<AnotherNestedTestPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Outlet />
        </>
    )
}

export default PageNavigation;
