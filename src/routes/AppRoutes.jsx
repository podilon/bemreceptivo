import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import WhatsappButton from "../components/UI/WhatsappButton/WhatsappButton";
import Header from "../components/Header/Header";
import GlobalSeo from "../components/Seo/GlobalSEO";

const AppRoutes = () => {
  return (
    <HelmetProvider>
      <Router>
        <GlobalSeo /> {/* Meta tags de SEO */}
        <Header />
        <Routes>
          <Route path="/bemreceptivo/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <WhatsappButton phone="558541416666" />
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default AppRoutes;
