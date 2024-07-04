import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServerOptions } from '@nestjs/websockets';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Server } from 'socket.io';

@WebSocketGateway({cors:true})
export class PacienteGateway implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() wss: Server;

  constructor(private readonly pacienteService: PacienteService) {}
  handleDisconnect(client: any) {
    // throw new Error('Method not implemented.');
    throw new Error ["Method not implemented"];
  }
  handleConnection(client: any, ...args: any[]) {
    // throw new Error('Method not implemented.');
    const token = client.handshake.headers.authentication as string;
    console.log(`Token: ${token}`);
  }

  @SubscribeMessage('createPaciente')
  create(@MessageBody() createPacienteDto: CreatePacienteDto) {
    // console.log(`createCiudadanoDto: ${JSON.stringify(createCiudadanoDto)}`)
    const inserted=this.pacienteService.create(createPacienteDto);
    this.wss.emit('newPaciente', this.findAll());
    return inserted;
  }

  @SubscribeMessage('findAllPacientes')
  findAll() {
    return this.pacienteService.findAll();
  }

  @SubscribeMessage('findOnePaciente')
  findOne(@MessageBody() id: number) {
    return this.pacienteService.findOne(id);
  }

  @SubscribeMessage('updatePaciente')
  update(@MessageBody() UpdatePacienteDto: UpdatePacienteDto) {
    return this.pacienteService.update(UpdatePacienteDto.id, UpdatePacienteDto);
  }

  @SubscribeMessage('removePaciente')
  remove(@MessageBody() id: number) {
    return this.pacienteService.remove(id);
  }
}
