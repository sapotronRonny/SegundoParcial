import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id_examen')
  findOne(@Param('id_examen') id_examen: string) {
    return this.testService.findOne(+id_examen);
  }

  @Patch(':id_examen')
  update(@Param('id_examen') id_examen: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id_examen, updateTestDto);
  }

  @Delete(':id_examen')
  remove(@Param('id_examen') id_examen: string) {
    return this.testService.remove(+id_examen);
  }
}
