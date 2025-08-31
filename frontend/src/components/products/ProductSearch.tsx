'use client';

import { useState, useEffect } from 'react';

interface ProductSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function ProductSearch({
  onSearch,
  placeholder = 'Buscar productos holísticos...',
}: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularSearches = [
    'aceites esenciales',
    'cristales',
    'meditación',
    'aromaterapia',
    'relajación',
    'bienestar',
    'cuencos tibetanos',
    'lavanda',
    'cuarzo rosa',
    'incienso',
  ];

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filteredSuggestions = popularSearches.filter(search =>
        search.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, popularSearches]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch(value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSearch(suggestion);
  };

  const clearSearch = () => {
    setSearchQuery('');
    onSearch('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative mx-auto max-w-md">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="focus:ring-secundario w-full rounded-full border border-gray-300 py-3 pr-10 pl-12 focus:border-transparent focus:ring-2 focus:outline-none"
        />

        {/* Icono de búsqueda */}
        <svg
          className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Botón de limpiar */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute top-1/2 right-4 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Sugerencias de búsqueda */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full right-0 left-0 z-50 mt-1 rounded-lg border border-gray-200 bg-white shadow-lg">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full border-b border-gray-100 px-4 py-3 text-left transition-colors last:border-b-0 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <svg
                  className="mr-3 h-4 w-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-gray-700">{suggestion}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Búsquedas populares cuando no hay query */}
      {!searchQuery && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">Búsquedas populares:</p>
          <div className="flex flex-wrap gap-2">
            {popularSearches.slice(0, 5).map((search, index) => (
              <button
                key={index}
                onClick={() => handleSearch(search)}
                className="hover:bg-secundario rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:text-white"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
