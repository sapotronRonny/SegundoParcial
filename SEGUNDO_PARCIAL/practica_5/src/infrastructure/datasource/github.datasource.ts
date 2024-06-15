import axios from 'axios';

export class GitHubDatasource {
  private readonly baseUrl = 'https://api.github.com';

  constructor(private readonly token: string) {}

  async getUserRepos(): Promise<any[]> {
    const response = await axios.get(`${this.baseUrl}/user/repos`, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
    return response.data;
  }
}
