import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar item de fardamento..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}