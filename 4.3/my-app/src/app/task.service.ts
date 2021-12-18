import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) { }





//   Name: {
//     type: String,
//     required: true
// },
// System: [{
//     type: String,
//     required: true
// }],
// Genre: [{
//     type: String,
//     required: true
// }],
// ReleaseDate: {
//     type: Date,
//     required: true,
//     default: Date.now
// }


  createGame(Name:string, System:string[], Genre:string[],ReleaseDate:number){
    
    return this.WebRequestService.post('api/game',{Name,System,Genre,ReleaseDate})
  }

  getGames(){
    return this.WebRequestService.get('api/game')
  }

  getGame(gameId: string){
    return this.WebRequestService.get(`api/game/${gameId}`);
  }

  deleteGame(gameId: string){
    return this.WebRequestService.delete(`api/game/${gameId}`);
  }

}
