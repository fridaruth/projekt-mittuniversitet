import { Injectable, signal, computed, effect } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  // privat signal, håller koll på valda kurser
  private selectedCoursesSignal = signal<Course[]>(
    JSON.parse(localStorage.getItem('my_ramschema') || '[]')
  );

  // publik signal
  public selectedCourses = this.selectedCoursesSignal.asReadonly();

  // räkna ut totala poängen automatiskt
  public totalPoints = computed(() => {
    return this.selectedCoursesSignal().reduce((sum, course) => sum + course.points, 0);
  });

  // constructor som sparar till localStorage
  constructor() {
    effect(() => {
      localStorage.setItem('my_ramschema', JSON.stringify(this.selectedCoursesSignal()));
    })
  }

  // funktion för att lägga till kurs i ramschema
  addCourse(course: Course): void {
    // kolla om kursen redan finns
    const alreadyExists = this.selectedCoursesSignal().some(c => c.courseCode === course.courseCode);

    if(!alreadyExists) {
      // skapa en ny array med kursen och uppdatera
      this.selectedCoursesSignal.set([...this.selectedCoursesSignal(), course]);
    } 
  }

  // funktion för att ta bort kurs
  removeCourse(courseCode: string): void {
    // filtrera bort kursen med matchande kurskod
    const updatedList = this.selectedCoursesSignal().filter(c => c.courseCode !== courseCode);
    this.selectedCoursesSignal.set(updatedList);
  }
}
