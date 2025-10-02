import { useEffect, useState } from "react";

export default function SearchInput({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query); 
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar usuario..."
      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200 ease-in-out"
    />
  );
}
