import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesDialogComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  providers: [DatePipe],
})
export class CoursesModule { }
