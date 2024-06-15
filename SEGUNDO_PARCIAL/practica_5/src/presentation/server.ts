import express,{Router} from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

// Importa el router general
import { AppRoutes } from './routes'; // Importa AppRoutes con nombre

const app = express();
app.use(compression());
app.use(express.json());


interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    

    //* Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );


    //* Routes
    this.app.use( this.routes );


    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });
    
    app.use('/api', AppRoutes.routes);

    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto http://localhost:${ this.port }`);
    });

  }

}