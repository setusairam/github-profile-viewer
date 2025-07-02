import { GitHubUser, GitHubRepo } from '../types/github';

const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username: string): Promise<GitHubUser> => {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('Failed to fetch user data');
  }
  
  return response.json();
};

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  
  const repos = await response.json();
  return repos
    .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5);
};