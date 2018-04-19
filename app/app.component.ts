import { Component, OnInit, OnDestroy, AnimationPlayer } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import {  } from "ui/dialogs";
import { ListPicker } from "ui/list-picker";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  public players: Player[];
  public playerGridSizeClass: "";
  public playerGridOptions: Array<PlayerGridOption> = [
    {
      name: "2 Player",
      gridClass: "player-1x2"
    },
    {
      name: "3 Player",
      gridClass: "player-1x3"
    },
    {
      name: "4 Player",
      gridClass: "player-2x2"
    }
  ];
  public selectedPlayerGridOptionIndex: number;

  constructor () {
    
  }

  public ngOnInit() {
    this.players = new Array<Player>();
    this.players.push({ name: "Player 1", score: 50 } as Player);
    this.players.push({ name: "Player 2", score: 50 } as Player);
    this.players.push({ name: "Player 3", score: 50 } as Player);
    this.players.push({ name: "Player 4", score: 50 } as Player);
  }

  public incrementClicked(player: Player, delta: number): void {
    player.score += delta;
  }
}

export class Player {
  public name: string;
  public score: number;
}

export class PlayerGridOption {
  public name: string;
  public gridClass: string;
}