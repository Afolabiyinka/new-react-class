import NavBar from "./components/NavBar";
import Features from "./pages/Features";
import Home from "./pages/Home";
import ProductsPage from "./pages/Products";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Features />
      <ProductsPage />
    </div>
  );
};

export default App;
