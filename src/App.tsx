import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import * as ROUTES from "./constants/routes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
