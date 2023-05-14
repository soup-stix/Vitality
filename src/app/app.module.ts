import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponentComponent } from './course-component/course-component.component';
import { CoursesService } from './course-component/courses.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginModelComponent } from './login-model/login-model.component';
import { SignupModelComponent } from './signup-model/signup-model.component';
import { RouterModule } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { NursingComponent } from './nursing/nursing.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { FiltersComponent } from './filters/filters.component';
import { BackgroundComponent } from './background/background.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HospitalComponent } from './hospital/hospital.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponentComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginModelComponent,
    SignupModelComponent,
    DoctorComponent,
    NursingComponent,
    AmbulanceComponent,
    FiltersComponent,
    BackgroundComponent,
    HospitalComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    RichTextEditorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "login", component: HomeComponent},
      {path: "signup", component: HomeComponent},
      {path: "doctor", component: DoctorComponent},
      {path: "hospital", component: HospitalComponent},
      {path: "nursing", component: NursingComponent},
      {path: "ambulence", component: AmbulanceComponent},
    ])
  ],
  providers: [
    CoursesService,
    CookieService,
    HomeComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
