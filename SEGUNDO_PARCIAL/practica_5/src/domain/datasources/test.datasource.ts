import { CreateTestDto, UpdateTestDto } from '../dtos';
import { TestEntity } from '../entities/test.entity';



export abstract class TestDatasource {

  abstract create( createTestDto: CreateTestDto ): Promise<TestEntity>;
  abstract getAll(): Promise<TestEntity[]>;
  abstract findById( id: number ): Promise<TestEntity>;
  abstract updateById( updateTestDto: UpdateTestDto ): Promise<TestEntity>;
  abstract deleteById( id: number ): Promise<TestEntity>;

}