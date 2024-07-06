import { Injectable } from '@nestjs/common';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';
import { Socket } from 'socket.io';

const registros = [
  {
    id: 1, 
    Resultado_test: 'resultado 1', 
    valor_paga: 1234, 
    observaciones: 'Observacion', 
    paciente_id: 1, 
    examen_id: 1
  },
  {
    id: 2, 
    Resultado_test: 'resultado 2', 
    valor_paga: 1235, 
    observaciones: 'Observacion 2', 
    paciente_id: 2, 
    examen_id: 2
  },
  {
    id: 3, 
    Resultado_test: 'resultado 3', 
    valor_paga: 1236, 
    observaciones: 'Observacion 3', 
    paciente_id: 3, 
    examen_id: 3
  },
];

interface User{
  id: string;
  nombre: string;
  isActive: boolean
}


interface ConnectedClients{
  [id: string]: {
    socket: Socket;
    user: User;
  }
}

const users: User[] = [
  {
    id: '1', 
    nombre: 'user1', 
    isActive: true},
  {
    id: '2', 
    nombre: 'user2', 
    isActive: false},
  {
    id: '3', 
    nombre: 'user3', 
    isActive: true},
 ];

@Injectable()
export class ResultadoService {

  private connectedClients: ConnectedClients = {};

  registerClient(socket: Socket, userId: string){
    const user = users.find(user => user.id === userId);
      if(!user){
        throw new Error('Usuario no encontrado')
      }
      if (!user.isActive){
        throw new Error('El usuario no está activo');
      }
      const userConnections = Object.values(this.connectedClients).filter(
        client => client.user.id === user.id
    );

    if (userConnections.length >= 3) {
        throw new Error('Usuario ya tiene 3 conexiones activas');
    }

      this.connectedClients[socket.id] = {
        socket: socket,
        user: user
      };
  }

  

  removeClient(clienteId: string){
    delete this.connectedClients[clienteId];
  }

  getConnectedClients():string[]{
    return Object.keys(this.connectedClients);
  }

  getUserFullName(socketId: string): string{
    return this.connectedClients[socketId].user.nombre;
  }

  checkUserConnection(user: User){
    for (const clientId of  Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
          // throw new Error('User is already connected');
          connectedClient.socket.disconnect();
          break;
      }
    }
  }

  create(createRegistroDto: CreateResultadoDto) {
    registros.push(createRegistroDto);
    return createRegistroDto; 
  }

  findAll() {
    return registros;
  }
}

