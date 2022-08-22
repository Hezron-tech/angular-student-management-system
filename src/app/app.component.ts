import { Student } from 'src/app/interface/sttudent';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management-system';

  students:Student[]=[ ]
}
