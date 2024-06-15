import { GitHubDatasource } from '../datasource/github.datasource';

export class GitHubRepository {
  constructor(private readonly datasource: GitHubDatasource) {}

  async getUserRepos(): Promise<any[]> {
    return this.datasource.getUserRepos();
  }
}
