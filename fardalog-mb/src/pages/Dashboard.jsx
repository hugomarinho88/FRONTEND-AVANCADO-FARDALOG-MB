import PageContainer from "../components/PageContainer/PageContainer.jsx";
import InfoCard from "../components/InfoCard/InfoCard.jsx";

export default function Dashboard() {
  return (
    <PageContainer>
      <h1>Dashboard</h1>

      <p>
        Bem-vindo ao FardaLog MB - Sistema de Gestão da Cadeia Logística de
        Fardamento da Marinha do Brasil.
      </p>

      <div className="dashboard-cards">
        <InfoCard icon="📦" title="Total de Itens" value="245" />
        <InfoCard icon="🚚" title="Notas em Atendimento" value="35" />
        <InfoCard icon="⚠️" title="Itens Críticos" value="12" />
        <InfoCard icon="🏬" title="OM Atendidas" value="18" />
      </div>
    </PageContainer>
  );
}