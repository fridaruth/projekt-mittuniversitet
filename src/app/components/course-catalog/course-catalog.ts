import { Component, inject } from '@angular/core';
import { CourseService } from '../../services/course';
import { ScheduleService } from '../../services/schedule';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [],
  templateUrl: './course-catalog.html',
  styleUrl: './course-catalog.scss',
})
export class CourseCatalog {
  // injicera tjänster
  private coursesService = inject(CourseService);
  private scheduleService = inject(ScheduleService);

  // public för HTML
  public courses = this.coursesService.courses;
  public selectedCourses = this.scheduleService.selectedCourses;
  public totalPoints = this.scheduleService.totalPoints;

  addCoursesToSchedule(course: Course): void {
    this.scheduleService.addCourse(course);
  }

  removeCoursesFromSchedule(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
  }

}
