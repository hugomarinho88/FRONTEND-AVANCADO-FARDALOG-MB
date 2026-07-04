import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer/PageContainer.jsx";
import ItemCard from "../components/ItemCard/ItemCard.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

export default function Catalogo() {
  const [itens, setItens] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setTimeout(() => {
      import("../data/itens.json").then((dados) => {
        setItens(dados.default);
        setCarregando(false);
      });
    }, 800);
  }, []);

  const itensFiltrados = itens.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  if (carregando) {
    return (
      <PageContainer>
        <h1>Catálogo de Fardamento</h1>
        <p>Carregando itens...</p>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1>Catálogo de Fardamento</h1>

      <p>Total de itens carregados: {itens.length}</p>

      <SearchBar
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      {itensFiltrados.length === 0 ? (
        <p>Nenhum item encontrado.</p>
      ) : (
        <div className="catalogo-grid">
          {itensFiltrados.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              nome={item.nome}
              categoria={item.categoria}
              estoque={item.estoque}
              status={item.status}
            />
          ))}
        </div>
      )}
    </PageContainer>
  );
}