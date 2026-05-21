import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  // injicera HttpClient
  private http = inject(HttpClient);
  // privat signal
  private coursesSignal = signal<Course[]>([]);
  // publik signal
  public courses = this.coursesSignal.asReadonly();

  constructor() {
    this.loadCourses();
  }

  // hämta data från public-mappen
  private loadCourses(): void {
    this.http.get<Course[]>('miun_courses.json').subscribe({
      next: (data: Course[]) => {
        this.coursesSignal.set(data);
      },
      error: (err: any) => {
        console.error('Kunde inte ladda kursdatan från JSON-filen:', err);
      }
    });
  }
}
