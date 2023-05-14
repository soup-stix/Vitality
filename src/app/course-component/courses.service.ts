import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses = ["course1","course2","course3"];
  getCourse(){
    return this.courses;
  }
}
