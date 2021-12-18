import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})



export class NewGameComponent implements OnInit {
  systems: string[];
  genres: string[];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  createNewGame(Name:string, System:string[], Genre:string[],ReleaseDate:number){
    this.taskService.createGame(Name,System,Genre,ReleaseDate).subscribe((response: any) =>{
      console.log(response);
    });
  }
}



  
