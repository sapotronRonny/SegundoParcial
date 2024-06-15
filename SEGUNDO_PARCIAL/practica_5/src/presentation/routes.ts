import { Router } from 'express';
import { PacienteRoutes } from './paciente/paciente.router';
import { ResultadoRoutes } from './resultado/resultado.router';
import { TestRoutes } from './test/test.router';
import { GitHubRoutes } from './github/github.router'; // Nueva ruta para GitHub

const router = Router();

router.use('/cocineros', PacienteRoutes.routes);
router.use('/recetas', ResultadoRoutes.routes);
router.use('/preparaciones', TestRoutes.routes);
router.use('/github', GitHubRoutes.routes); // Ruta para GitHub

export const AppRoutes = { routes: router }; // Exporta las rutas de manera correcta
