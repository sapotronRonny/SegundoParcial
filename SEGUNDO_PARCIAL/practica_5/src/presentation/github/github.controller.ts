import { Request, Response } from 'express';
import { GitHubRepository } from '../../infrastructure/repositories/github.repository';

export class GitHubController {
  constructor(private readonly githubRepository: GitHubRepository) {}

  public getUserRepos = async (req: Request, res: Response) => {
    try {
      const repos = await this.githubRepository.getUserRepos();
      return res.status(200).json(repos);
    } catch (error: any) {
      console.error('Error in getUserRepos:', error);
      res.status(500).json({ message: 'Error al obtener los repositorios', error: error.message });
    }
  };
}
