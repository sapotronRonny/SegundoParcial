import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDeExamanDto } from './create-tipo_de_examan.dto';

export class UpdateTipoDeExamanDto extends PartialType(CreateTipoDeExamanDto) {
  id: number;
}
