import React from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GitHubRepo } from '../types/github';

interface RepoCardProps {
  repo: GitHubRepo;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate flex-1">
          {repo.name}
        </h3>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black dark:hover:text-white transition-colors ml-2"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      {repo.description && (
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {repo.description}
        </p>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            <span>{repo.stargazers_count}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <GitFork className="w-4 h-4" />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        
        {repo.language && (
          <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {repo.language}
          </span>
        )}
      </div>
    </div>
  );
};

export default RepoCard;