import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import MobileRedirect from "./components/Mobile/MobileRedirect";



function App() {
  return (
    <>
    <MobileRedirect />
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>  
    </>
    
  );
}

export default App;
