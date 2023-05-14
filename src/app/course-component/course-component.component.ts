import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent {
  title = "List of Courses:";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourse(); 
  }
}
