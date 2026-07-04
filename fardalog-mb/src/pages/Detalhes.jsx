import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer/PageContainer.jsx";
import StatusBadge from "../components/StatusBadge/StatusBadge.jsx";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  useEffect(() => {
    import("../data/itens.json").then((dados) => {
      const encontrado = dados.default.find(
        (item) => item.id === Number(id)
      );

      setItem(encontrado);
    });
  }, [id]);

  if (!item) {
    return (
      <PageContainer>
        <h2>Item não encontrado.</h2>

        <br />

        <button
          className="voltar-btn"
          onClick={() => navigate("/catalogo")}
        >
          ← Voltar ao Catálogo
        </button>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1>{item.nome}</h1>

      <br />

      <p><strong>Categoria:</strong> {item.categoria}</p>
      <p><strong>Estoque:</strong> {item.estoque}</p>

      <br />

      <StatusBadge status={item.status} />

      <br />
      <br />

      <button
        className="voltar-btn"
        onClick={() => navigate("/catalogo")}
      >
        ← Voltar ao Catálogo
      </button>
    </PageContainer>
  );
}