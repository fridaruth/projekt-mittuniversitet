import { Component, inject, signal, computed } from '@angular/core';
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

  // filtrering
  public searchQuery = signal<string>('');
  public selectedSubject = signal<string>('');

  // skapa dynamisk lista
  public uniqueSubjects = computed(() => {
    const allSubjects = this.courses().map(c => c.subject);
    return [...new Set(allSubjects)].sort();
  });

  // filtrerad lista
  public filteredCourses = computed(() => {
    const search = this.searchQuery().toLowerCase();
    const subject = this.selectedSubject();

    if (search === '' && subject === '') {
      return [];
    }

    return this.courses().filter(course => {
      // kolla om sökordet finns
      const matchesSearch = course.courseCode.toLowerCase().includes(search) ||
        course.courseName.toLowerCase().includes(search);

      // kollar om ämnet matchar dropdown-menyn
      const matchesSubject = subject === '' || course.subject === subject;

      return matchesSearch && matchesSubject;
    });
  });

  // Uppdaterar när besökare skriver i sökfältet
  onSearchChange(event: Event): void {
    const input = event.target as HTMLSelectElement;
    this.searchQuery.set(input.value);
  } 

  // Uppdaterar när ämnet byts
  onSubjectChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.selectedSubject.set(select.value);
  }

  // lägg till i ramschema
addCoursesToSchedule(course: Course): void {
  this.scheduleService.addCourse(course);
}

// ta bort från ramschema
removeCoursesFromSchedule(courseCode: string): void {
  this.scheduleService.removeCourse(courseCode);
}
}