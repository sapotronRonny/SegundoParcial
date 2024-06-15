import { Router } from 'express';
import { TestsController } from '../../presentation/test/test.controller';
import { TestDatasourceImpl } from '../../infrastructure/datasource/test.datasource.impl';
import { TestRepositoryImpl } from '../../infrastructure/repositories/Test.repository.impl';

export class TestRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TestDatasourceImpl();
    const TestRepository = new TestRepositoryImpl(datasource);
    const TestController = new TestsController(TestRepository);

    router.get('/', TestController.getTests);
    router.get('/:id', TestController.getTestById);
    router.post('/', TestController.createTest);
    router.put('/:id', TestController.updateTest);
    router.delete('/:id', TestController.deleteTest);

    return router;
  }
}
