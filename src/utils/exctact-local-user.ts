import { GitHubUser, LocalGitHubUser } from "types/user";

export const extractLocalUser = (user: GitHubUser): LocalGitHubUser => ({
  ...user,
  twitter: user.twitter_username,
  created: user.created_at,
  avatar: user.avatar_url,
  repos: user.public_repos
})