import { BrowserRouter, Route, Routes } from "react-router";
import App from '../App.tsx'
import TestPage from '../pages/testPages.tsx'
import NestedTestPage from '../pages/nestedTestPage.tsx'
import AnotherNestedTestPage from '../pages/anotherNestedTestPage.tsx'
import BasePage from "../pages/basePage.tsx";

function PageNavigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route index element={<BasePage />} />
                        <Route path="test" element={<TestPage />} />
                        <Route path="nested" element={<NestedTestPage />} />
                        <Route path="anotherNested" element={<AnotherNestedTestPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageNavigation;
