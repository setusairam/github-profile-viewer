import React from 'react';
import { MapPin, Users, GitFork, ExternalLink } from 'lucide-react';
import { GitHubUser } from '../types/github';

interface UserProfileProps {
  user: GitHubUser;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 animate-slide-up">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.avatar_url}
          alt={`${user.login}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-gray-700 shadow-lg"
        />
        
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.name || user.login}
            </h2>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-1">@{user.login}</p>
          
          {user.bio && (
            <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-md">
              {user.bio}
            </p>
          )}
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
            )}
            
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{user.followers} followers</span>
            </div>
            
            <div className="flex items-center gap-1">
              <GitFork className="w-4 h-4" />
              <span>{user.public_repos} repos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;