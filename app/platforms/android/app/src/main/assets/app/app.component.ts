import { Component, OnInit, OnDestroy, AnimationPlayer } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  public players: Player[];

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