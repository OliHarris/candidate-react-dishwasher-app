import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductGrid from "./pages/ProductGrid";
import Product from "./pages/Product";
import styles from "../assets/styles/App.module.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductGrid appStyles={styles} />} />
          <Route
            path="/candidate-react-dishwasher-app"
            element={<ProductGrid appStyles={styles} />}
          />
          <Route
            path="/candidate-react-dishwasher-app/product"
            element={<Product appStyles={styles} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
