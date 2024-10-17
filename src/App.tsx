import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppContextProvider } from "./Context/AppContext";
import { Catalog } from "./modules/Catalog";
import { PAGES } from "./constants/enums";
import { Main } from "./modules/Main";
import { Form } from "./modules/Form";

import "./index.css";

const App = () => (
  <AppContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path={PAGES.HOME} element={<Main />} />
        <Route path={PAGES.FORM} element={<Form />} />
        <Route path={PAGES.CATALOG} element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  </AppContextProvider>
);

export default App;
