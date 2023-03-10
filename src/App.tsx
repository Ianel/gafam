import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import * as ROUTES from "./constants/routes";
import MainLayout from "./layouts";
import CEOsPage from "./pages/CEOs";
import { ButtonProvider } from "./context";
import ProductsPage from "./pages/Companies";
import ProductPage from "./pages/Product";

function App() {
    return (
        <BrowserRouter>
            <ButtonProvider>
                <MainLayout>
                    <Routes>
                        <Route path={ROUTES.HOME} element={<HomePage />} />
                        <Route path={ROUTES.CEO} element={<CEOsPage />} />
                        <Route
                            path={ROUTES.COMPANY}
                            element={<ProductsPage />}
                        />
                        <Route
                            path={ROUTES.PRODUCTS}
                            element={<ProductPage />}
                        />
                    </Routes>
                </MainLayout>
            </ButtonProvider>
        </BrowserRouter>
    );
}

export default App;
