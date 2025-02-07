import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalSeo from "../components/Seo/GlobalSEO";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/UI/WhatsappButton/WhatsappButton";
import Header from "../components/Header/Header";


const AppRoutes = () => {
    return (
        <Router>
            <GlobalSeo /> {/* Meta tags de SEO */}

           
            <Header />

           
            <Routes>
                {/* Defina as rotas principais aqui */}
                <Route path="/" element={<Home />} />

                {/* Rota comodín para captura de erro 404 */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>

            {/* Botão do WhatsApp sempre disponível na tela */}
            <WhatsappButton phone="558541416666" />

            <Footer />

        </Router>
    );
};

export default AppRoutes;
