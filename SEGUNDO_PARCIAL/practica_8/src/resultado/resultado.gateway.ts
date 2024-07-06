import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Server, Socket } from 'socket.io'; 

@WebSocketGateway({cors: true})
export class ResultadoGateway implements OnGatewayConnection, OnGatewayDisconnect{

  @WebSocketServer()
  wss: Server;

  constructor(private readonly resultadoService: ResultadoService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      // validar el token
      await this.resultadoService.registerClient(client, token);
    } catch (error) {
      client.disconnect();  
      return;    
    }
    this.wss.emit('clients-updated', this.resultadoService.getConnectedClients());
  }
  handleDisconnect(client: Socket) {
    this.resultadoService.removeClient(client.id);
    this.wss.emit('clients-updated', this.resultadoService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  onMessageFromClient(client: Socket) {
    //! todos reciben el mensaje
    this.wss.emit('message-from-server',{
      fullName: this.resultadoService.getUserFullName(client.id),
    });
  }


  @SubscribeMessage('agregar-transaccion')
  create(@MessageBody() createresultadoDto: CreateResultadoDto) {
    
    const inserted = this.resultadoService.create(createresultadoDto);
    this.wss.emit('newresultado', this.findAll() );
    return inserted;
  }

  @SubscribeMessage('consultar-activos')
  findAll() {
    return this.resultadoService.findAll();
  }
}

