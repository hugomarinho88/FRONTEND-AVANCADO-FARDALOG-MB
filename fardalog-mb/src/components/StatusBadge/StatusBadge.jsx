import "./StatusBadge.css";

export default function StatusBadge({ status }) {
  const statusClass = status
    .toLowerCase()
    .replaceAll(" ", "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return <span className={`status-badge ${statusClass}`}>{status}</span>;
}