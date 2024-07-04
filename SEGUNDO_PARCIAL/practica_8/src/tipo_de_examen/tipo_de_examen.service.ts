import { Injectable } from '@nestjs/common';
import { CreateTipoDeExamanDto } from './dto/create-tipo_de_examan.dto';
import { UpdateTipoDeExamanDto } from './dto/update-tipo_de_examan.dto';

@Injectable()
export class TipoDeExamenService {
  create(createTipoDeExamanDto: CreateTipoDeExamanDto) {
    return 'This action adds a new tipoDeExaman';
  }

  findAll() {
    return `This action returns all tipoDeExamen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDeExaman`;
  }

  update(id: number, updateTipoDeExamanDto: UpdateTipoDeExamanDto) {
    return `This action updates a #${id} tipoDeExaman`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDeExaman`;
  }
}
