import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./modules/Main";
import { Form } from "./modules/Form";
import { Catalog } from "./modules/Catalog";
import { PAGES } from "./constants/enums";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PAGES.HOME} element={<Main />} />
      <Route path={PAGES.CATALOG} element={<Form />} />
      <Route path={PAGES.FORM} element={<Catalog />} />
    </Routes>
  </BrowserRouter>
);

export default App;
