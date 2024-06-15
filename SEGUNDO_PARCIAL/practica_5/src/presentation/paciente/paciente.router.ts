import { Router } from 'express';
import { PacientesController } from '../../presentation/paciente/paciente.controller';
import { PacienteDatasourceImpl } from '../../infrastructure/datasource/Paciente.datasource.impl';
import { PacienteRepositoryImpl } from '../../infrastructure/repositories/paciente.repository.impl';

export class PacienteRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PacienteDatasourceImpl();
    const PacienteRepository = new PacienteRepositoryImpl(datasource);
    const PacienteController = new PacientesController(PacienteRepository);

    router.get('/', PacienteController.getPacientes);
    router.get('/:id', PacienteController.getPacienteById);
    router.post('/', PacienteController.createPaciente);
    router.put('/:id', PacienteController.updatePaciente);
    router.delete('/:id', PacienteController.deletePaciente);

    return router;
  }
}
