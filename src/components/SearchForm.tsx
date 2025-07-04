import React, { useState, useEffect } from 'react';
import { Search, Github } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';

interface SearchFormProps {
  onSearch: (username: string) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('');
  const debouncedUsername = useDebounce(username.trim(), 500);

  useEffect(() => {
    if (debouncedUsername && debouncedUsername.length > 0) {
      onSearch(debouncedUsername);
    }
  }, [debouncedUsername, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-black dark:bg-white rounded-full mb-4">
          <Github className="w-8 h-8 text-white dark:text-black" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          GitHub User Search
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover GitHub profiles and their top repositories
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group flex">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full pl-12 pr-4 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-l-xl focus:border-black dark:focus:border-white focus:outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:z-10"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !username.trim()}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-r-xl border-2 border-black dark:border-white hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white dark:border-black border-t-transparent"></div>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
