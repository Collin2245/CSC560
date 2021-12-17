import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-api-holder',
  templateUrl: './api-holder.component.html',
  styleUrls: ['./api-holder.component.css']
})
export class ApiHolderComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }


}
