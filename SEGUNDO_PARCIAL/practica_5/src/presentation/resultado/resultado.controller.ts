import { prisma } from '../../data/postgres';
import { Request, Response } from 'express';
import { CreateResultadoDto} from '../../domain/dtos/resultados/create-resultado.dto';
import { UpdateResultadoDto} from '../../domain/dtos/resultados/update-resultado.dto';

import { ResultadoRepository } from '../../domain/repositories/resultado.repository';

export class ResultadosController {

  constructor(private readonly ResultadoRepository: ResultadoRepository) { }

  public getResultados = async (req: Request, res: Response) => {
    try {
      const Resultados = await this.ResultadoRepository.getAll();
      return res.status(200).json(Resultados);
    } catch (error: any) {
      console.error('Error in getResultados:', error);
      res.status(500).json({ message: 'Error al obtener los Resultados', error: error.message });
    }
  };

  public getResultadoById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const Resultado = await this.ResultadoRepository.findById(id);
      if (!Resultado) {
        return res.status(404).json({ message: `Resultado con id ${id} no encontrado` });
      }
      return res.json(Resultado);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el Resultado', error: error.message });
    }
  };

  public createResultado = async (req: Request, res: Response) => {
    try {
      const [error, createResultadoDto] = CreateResultadoDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Resultado = await this.ResultadoRepository.create(createResultadoDto!);
      return res.json(Resultado);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el Resultado', error: error.message });
    }
  };

  public updateResultado = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updateResultadoDto] = UpdateResultadoDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Resultado = await this.ResultadoRepository.updateById(updateResultadoDto!);
      return res.json(Resultado);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el Resultado', error: error.message });
    }
  };

  public deleteResultado = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.ResultadoRepository.deleteById(id);
      return res.json({ message: 'Resultado eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el Resultado', error: error.message });
    }
  };
}
