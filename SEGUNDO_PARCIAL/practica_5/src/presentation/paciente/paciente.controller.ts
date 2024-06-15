import { prisma } from '../../data/postgres';
import { Request, Response } from 'express';
import { CreatePacienteDto} from '../../domain/dtos/paciente/create-paciente.dto';
import { UpdatePacienteDto} from '../../domain/dtos/paciente/update-paciente.dto';

import { PacienteRepository } from '../../domain/repositories/paciente.repository';

export class PacientesController {

  constructor(private readonly PacienteRepository: PacienteRepository) { }

  public getPacientes = async (req: Request, res: Response) => {
    try {
      const Pacientes = await this.PacienteRepository.getAll();
      return res.status(200).json(Pacientes);
    } catch (error: any) {
      console.error('Error in getPacientes:', error);
      res.status(500).json({ message: 'Error al obtener los Pacientes', error: error.message });
    }
  };

  public getPacienteById = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const Paciente = await this.PacienteRepository.findById(id);
      if (!Paciente) {
        return res.status(404).json({ message: `Paciente con id ${id} no encontrado` });
      }
      return res.json(Paciente);
    } catch (error: any) {
      return res.status(500).json({ message: 'Error al obtener el Paciente', error: error.message });
    }
  };

  public createPaciente = async (req: Request, res: Response) => {
    try {
      const [error, createPacienteDto] = CreatePacienteDto.create(req.body);
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Paciente = await this.PacienteRepository.create(createPacienteDto!);
      return res.json(Paciente);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al crear el Paciente', error: error.message });
    }
  };

  public updatePaciente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      const [error, updatePacienteDto] = UpdatePacienteDto.create({ ...req.body, id });
      if (error) {
        return res.status(400).json({ message: error });
      }
      const Paciente = await this.PacienteRepository.updateById(updatePacienteDto!);
      return res.json(Paciente);
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al actualizar el Paciente', error: error.message });
    }
  };

  public deletePaciente = async (req: Request, res: Response) => {
    const id = +req.params.id;
    try {
      await this.PacienteRepository.deleteById(id);
      return res.json({ message: 'Paciente eliminado correctamente' });
    } catch (error: any) {
      return res.status(400).json({ message: 'Error al eliminar el Paciente', error: error.message });
    }
  };
}
