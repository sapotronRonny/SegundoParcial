import { CreateTestDto,
        TestDatasource,
        TestEntity,
        UpdateTestDto } from '../../domain';
import { TestRepository } from '../../domain/repositories/test.repository'        


export class TestRepositoryImpl implements TestRepository {

constructor(
private readonly datasource: TestDatasource,
) { }


create( createTestDto: CreateTestDto ): Promise<TestEntity> {
return this.datasource.create( createTestDto );
}

getAll(): Promise<TestEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<TestEntity> {
return this.datasource.findById( id );
}

updateById( updateTestDto: UpdateTestDto ): Promise<TestEntity> {
return this.datasource.updateById( updateTestDto );
}

deleteById( id: number ): Promise<TestEntity> {
return this.datasource.deleteById( id );
}

}