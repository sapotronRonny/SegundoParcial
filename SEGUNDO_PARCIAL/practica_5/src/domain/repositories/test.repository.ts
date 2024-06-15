import { CreateTestDto, UpdateTestDto } from '../dtos';
import { TestEntity } from '../entities/test.entity';



export abstract class TestRepository {

  abstract create( createPreguntaDto: CreateTestDto ): Promise<TestEntity>;
  abstract getAll(): Promise<TestEntity[]>;
  abstract findById( id: number ): Promise<TestEntity>;
  abstract updateById( updatePreguntaDto: UpdateTestDto ): Promise<TestEntity>;
  abstract deleteById( id: number ): Promise<TestEntity>;
}