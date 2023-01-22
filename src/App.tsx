import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import * as ROUTES from "./constants/routes";
import MainLayout from "./layouts";
import CEOsPage from "./pages/CEOs";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.CEO} element={<CEOsPage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
