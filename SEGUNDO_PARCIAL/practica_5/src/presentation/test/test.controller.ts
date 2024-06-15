import { Request, Response } from 'express';
import { CreateTestDto } from '../../domain/dtos/test/create-test.dto';
import { UpdateTestDto } from '../../domain/dtos/test/update-test.dto';
import { TestRepository } from '../../domain/repositories/test.repository';

export class TestsController {

  constructor(private readonly TestRepository: TestRepository) { }

  public getTests = async (req: Request, res: Response) => {
    try {
      const Tests = await this.TestRepository.getAll();
      return res.status(200).json(Tests);
    } catch (error: any) {
      console.error('Error in getTests:', error);
      res.status(500).json({ message: 'Error al obtener las Tests', error: error.message });
    }
  };

  public getTestById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const Test = await this.TestRepository.findById(id);
      if (!Test) {
        return res.status(404).json({ message: `Test con id ${id} no encontrada` });
      }
      return res.json(Test);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener la Test', error: error.message });
    }
  };

  public createTest = async (req: Request, res: Response) => {
    try {
      const [error, createTestDto] = CreateTestDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Test = await this.TestRepository.create(createTestDto!);
      return res.json(Test);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear la Test', error: error.message });
    }
  };

  public updateTest = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateTestDto] = UpdateTestDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Test = await this.TestRepository.updateById(updateTestDto!);
      return res.json(Test);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar la Test', error: error.message });
    }
  };

  public deleteTest = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.TestRepository.deleteById(id);
      return res.json({ message: 'Test eliminada correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar la Test', error: error.message });
    }
  };
}
