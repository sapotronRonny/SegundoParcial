import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { TipoDeExamenService } from './tipo_de_examen.service';
import { CreateTipoDeExamanDto } from './dto/create-tipo_de_examan.dto';
import { UpdateTipoDeExamanDto } from './dto/update-tipo_de_examan.dto';

@WebSocketGateway()
export class TipoDeExamenGateway {
  constructor(private readonly tipoDeExamenService: TipoDeExamenService) {}

  @SubscribeMessage('createTipoDeExaman')
  create(@MessageBody() createTipoDeExamanDto: CreateTipoDeExamanDto) {
    return this.tipoDeExamenService.create(createTipoDeExamanDto);
  }

  @SubscribeMessage('findAllTipoDeExamen')
  findAll() {
    return this.tipoDeExamenService.findAll();
  }

  @SubscribeMessage('findOneTipoDeExaman')
  findOne(@MessageBody() id: number) {
    return this.tipoDeExamenService.findOne(id);
  }

  @SubscribeMessage('updateTipoDeExaman')
  update(@MessageBody() updateTipoDeExamanDto: UpdateTipoDeExamanDto) {
    return this.tipoDeExamenService.update(updateTipoDeExamanDto.id, updateTipoDeExamanDto);
  }

  @SubscribeMessage('removeTipoDeExaman')
  remove(@MessageBody() id: number) {
    return this.tipoDeExamenService.remove(id);
  }
}
