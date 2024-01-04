import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "components/Container";
import FavoritosProvider from "context/FavoritosContext";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/favoritos" element={<Favoritos />} />Favoritos
          </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;