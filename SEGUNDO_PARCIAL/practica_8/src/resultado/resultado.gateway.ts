import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { ResultadoService } from './resultado.service';
import { CreateResultadoDto } from './dto/create-resultado.dto';
import { UpdateResultadoDto } from './dto/update-resultado.dto';

@WebSocketGateway()
export class ResultadoGateway {
  constructor(private readonly resultadoService: ResultadoService) {}

  @SubscribeMessage('createResultado')
  create(@MessageBody() createResultadoDto: CreateResultadoDto) {
    return this.resultadoService.create(createResultadoDto);
  }

  @SubscribeMessage('findAllResultado')
  findAll() {
    return this.resultadoService.findAll();
  }

  @SubscribeMessage('findOneResultado')
  findOne(@MessageBody() id: number) {
    return this.resultadoService.findOne(id);
  }

  @SubscribeMessage('updateResultado')
  update(@MessageBody() updateResultadoDto: UpdateResultadoDto) {
    return this.resultadoService.update(updateResultadoDto.id, updateResultadoDto);
  }

  @SubscribeMessage('removeResultado')
  remove(@MessageBody() id: number) {
    return this.resultadoService.remove(id);
  }
}
