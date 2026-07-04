import "./InfoCard.css";

export default function InfoCard({ icon, title, value }) {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>

      <div>
        <p className="info-card-title">{title}</p>
        <h2 className="info-card-value">{value}</h2>
      </div>
    </div>
  );
}