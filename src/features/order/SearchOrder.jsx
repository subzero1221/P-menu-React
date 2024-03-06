import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="search order..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 text-sm bg-yellow-100 rounded-full placeholder: w-28 text-stone-400 focus:outline-none focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
