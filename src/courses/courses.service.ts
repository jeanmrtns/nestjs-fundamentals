import { HttpException, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  async findOne(id: string) {
    const course = await this.courses.find((course) => course.id === id);

    if (!course) {
      throw new HttpException(`Course with ID ${id} not found`, 404);
    }

    return course;
  }

  async findAll() {
    return await this.courses;
  }

  async createOne(course: any) {
    await this.courses.push(course);
    return course;
  }

  async updateOne(id: string, body: any) {
    const courseIndex = await this.courses.findIndex(
      (course) => course.id === id,
    );
    this.courses[courseIndex] = body;
  }

  async deleteOne(id: string) {
    const filtered = await this.courses.filter((course) => course.id !== id);

    this.courses = filtered;
  }
}
