import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { IThemeContext, Themes } from "./Types";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import ProductInfo from "./Pages/ProductInfo";
import ScrollToTop from "./Components/ScrollToTop";

export const AppContext = createContext<IThemeContext | undefined>(undefined);
function App() {
  const [theme, setTheme] = useState<Themes>("bg-bgdark");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "bg-bgdark" ? "bg-bglight" : "bg-bgdark"));
  };
  const contextValue: IThemeContext = { theme, toggleTheme };
  const AppClient = new QueryClient();
  return (
    <Router>
      <QueryClientProvider client={AppClient}>
        <AppContext.Provider value={contextValue}>
          <ScrollToTop /> {/* 👈 goes here */}
          <div className={`${theme} text-cusT transition-colors duration-300`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId" element={<ProductInfo />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </AppContext.Provider>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
