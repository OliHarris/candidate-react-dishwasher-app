import { HashRouter, Routes, Route } from "react-router-dom";

import ProductGrid from "./pages/ProductGrid";
import Product from "./pages/Product";
import styles from "../assets/styles/App.module.scss";

const App = () => {
  return (
    <div>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
};

export default App;
