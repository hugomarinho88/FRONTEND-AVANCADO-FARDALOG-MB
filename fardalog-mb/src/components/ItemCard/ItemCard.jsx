import "./ItemCard.css";
import StatusBadge from "../StatusBadge/StatusBadge.jsx";
import { useNavigate } from "react-router-dom";

export default function ItemCard({
  id,
  nome,
  categoria,
  estoque,
  status
}) {
  const navigate = useNavigate();

  const iconesPorCategoria = {
    Cobertura: "🧢",
    Calçado: "👢",
    Uniforme: "👔",
    Operacional: "🪖",
    Acessório: "🎒",
    Insígnia: "🎖️"
  };

  const icone = iconesPorCategoria[categoria] || "👕";

  return (
    <div className="item-card">
      <div className="item-icon">{icone}</div>

      <h3>{nome}</h3>

      <p>
        <strong>Categoria:</strong> {categoria}
      </p>

      <p>
        <strong>Estoque:</strong> {estoque}
      </p>

      <StatusBadge status={status} />

      <button onClick={() => navigate(`/detalhes/${id}`)}>
        Ver detalhes
      </button>
    </div>
  );
}