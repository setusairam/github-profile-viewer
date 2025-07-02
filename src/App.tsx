import React, { useState, useCallback } from 'react';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';
import RepoCard from './components/RepoCard';
import ErrorMessage from './components/ErrorMessage';
import ThemeToggle from './components/ThemeToggle';
import { SearchState } from './types/github';
import { fetchGitHubUser, fetchUserRepos } from './services/githubApi';

function App() {
  const [searchState, setSearchState] = useState<SearchState>({
    user: null,
    repos: [],
    loading: false,
    error: null,
  });

  const handleSearch = useCallback(async (username: string) => {
    setSearchState(prev => ({
      ...prev,
      loading: true,
      error: null,
    }));

    try {
      const [user, repos] = await Promise.all([
        fetchGitHubUser(username),
        fetchUserRepos(username),
      ]);

      setSearchState({
        user,
        repos,
        loading: false,
        error: null,
      });
    } catch (error) {
      setSearchState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred',
      }));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12">
        <SearchForm onSearch={handleSearch} loading={searchState.loading} />
        
        <div className="mt-12 space-y-8">
          {searchState.error && (
            <div className="max-w-2xl mx-auto">
              <ErrorMessage message={searchState.error} />
            </div>
          )}
          
          {searchState.user && (
            <div className="max-w-4xl mx-auto space-y-8">
              <UserProfile user={searchState.user} />
              
              {searchState.repos.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Top Repositories
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchState.repos.map((repo) => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;