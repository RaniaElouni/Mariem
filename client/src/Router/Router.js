
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import OffreDemploi from "../pages/OffreDemploi";
import OffreDeStage from "../pages/OffreDeStage";
import Contact from "../pages/Contact";
import Aply from "../pages/Aply";
import AplyStage from "../pages/AplyStage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="offre-d'emploi" element={<OffreDemploi />} />
          <Route path="offre-de-stage" element={<OffreDeStage />} />
          <Route path="apply/:id" element={<Aply />} />
          <Route path="apply-stage/:id" element={<AplyStage />} />
          <Route path="contact" element={<Contact/>} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

