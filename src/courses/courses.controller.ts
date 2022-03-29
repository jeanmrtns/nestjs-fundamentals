import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(
    @Inject(CoursesService)
    private readonly coursesService: CoursesService,
  ) {}

  @Get('list')
  async findAll() {
    return await this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.coursesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  async createOne(@Body() course: CreateCourseDto) {
    return await this.coursesService.createOne(course);
  }

  @Patch(':id')
  async updateOne(@Param('id') id: string, @Body() body: UpdateCourseDto) {
    return await this.coursesService.updateOne(id, body);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.coursesService.deleteOne(id);
  }
}
