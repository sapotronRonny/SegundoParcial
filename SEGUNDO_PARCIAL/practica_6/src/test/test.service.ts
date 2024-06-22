import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly TestRepository: Repository<Test>
  ) {

  }
  async create(CreateTestDto: CreateTestDto) {
    const Test = this.TestRepository.create(CreateTestDto);
    return this.TestRepository.save(Test);
  }

  async findAll(): Promise<Test[]> {
    return this.TestRepository.find();
  }

  async findOne(id_examen: number): Promise<Test> {
    return this.TestRepository.findOneBy({ id_examen: id_examen });
  }

  async update(id_examen: number, updateCocineroDto: UpdateTestDto): Promise<Test> {
    await this.TestRepository.update(id_examen, updateCocineroDto);
    return this.TestRepository.findOneBy({ id_examen: id_examen });
  }

  async remove(id_examen: number): Promise<Test> {
    await this.TestRepository.update(id_examen, { estado: 'eliminado' });
    return this.TestRepository.findOneBy({ id_examen: id_examen});
  }
}
