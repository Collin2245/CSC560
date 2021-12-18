import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,ParamMap ,Router} from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-api-holder',
  templateUrl: './api-holder.component.html',
  styleUrls: ['./api-holder.component.css']
})
export class ApiHolderComponent implements OnInit {


  games: any;
  currentGame: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      params=>{
        console.log(params)
        let gameId = params.get("gameId") as string
        this.taskService.getGame(gameId).subscribe((game: any) => {
          this.currentGame = game.data;
          console.log(game)
        })
      }
    )
    this.getGamesUpdate()


  }

  getGamesUpdate(): void{
    this.taskService.getGames().subscribe((games:any) => {
      // this.games = games;
      this.games = games.data
      console.log(this.games)
    })
  }

  deleteGame(): void{
    console.log("current game" + this.currentGame)
    this.taskService.deleteGame(this.currentGame._id).subscribe((games:any) => {
      // // this.games = games;
      // this.games = games.data
      console.log(games)
      this.router.navigate(["/game"])
    })
  }




}
