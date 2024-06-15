import { Router } from 'express';
import { ResultadosController } from '.././/resultado/resultado.controller';
import { ResultadoDatasourceImpl } from '../../infrastructure/datasource/resultado.datasource.impl';
import { ResultadoRepositoryImpl } from '../../infrastructure/repositories/resultado.repository.impl';

export class ResultadoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ResultadoDatasourceImpl();
    const ResultadoRepository = new ResultadoRepositoryImpl(datasource);
    const ResultadoController = new ResultadosController(ResultadoRepository);

    router.get('/', ResultadoController.getResultados);
    router.get('/:id', ResultadoController.getResultadoById);
    router.post('/', ResultadoController.createResultado);
    router.put('/:id', ResultadoController.updateResultado);
    router.delete('/:id', ResultadoController.deleteResultado);

    return router;
  }
}
