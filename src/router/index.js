import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/Home";
import { Characters } from "../pages/Characters";
import { Locations } from "../pages/Locations";
import { Episodes } from "../pages/Episodes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/personagens" element={<Characters />} />
      <Route path="/localizacoes" element={<Locations />} />
      <Route path="/episodios" element={<Episodes />} />
    </Routes>
  );
};

export { AppRoutes };
