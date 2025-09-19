import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { createContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { IAppContext, Product, Themes } from "./Types";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import ProductInfo from "./Pages/ProductInfo";
import ScrollToTop from "./Components/ScrollToTop";
import Explore from "./Pages/Explore";
import About from "./Pages/About";

export const AppContext = createContext<IAppContext | undefined>(undefined);
function App() {
  const [theme, setTheme] = useState<Themes>("bg-bgdark");
  const [cart, setCart] = useState<Product[]>([])
  const toggleTheme = () => {
    setTheme((prev) => (prev === "bg-bgdark" ? "bg-bglight" : "bg-bgdark"));
  };
  const addToCart = (p: Product) => {setCart((prev) => [...prev, p])}
  const contextValue: IAppContext = { theme, toggleTheme, cart, addToCart };
  const AppClient = new QueryClient();
  console.log(cart);
  return (
    <Router>
      <QueryClientProvider client={AppClient}>
        <AppContext.Provider value={contextValue}>
          <ScrollToTop /> 
          <div className={`${theme} text-cusT transition-colors duration-300`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:productId" element={<ProductInfo />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about" element={<About />} />
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
