import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/UI/WhatsappButton/WhatsappButton";
import Header from "../components/Header/Header";
import GlobalSeo from "../components/Seo/GlobalSEO";

// Lazy load das páginas
const Home = lazy(() => import("../pages/Home/Home"));
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"));

// Componente de carregamento enquanto a página está sendo carregada
const Loading = () => <div>Carregando...</div>;

const AppRoutes = () => {
  return (
    <HelmetProvider>
      <Router basename="/bemreceptivo"> {/* Adiciona o basename para o GitHub Pages */}
        <GlobalSeo />
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <WhatsappButton phone="558541416666" />
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default AppRoutes;
