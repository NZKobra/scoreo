import { Component, OnInit, OnDestroy, AnimationPlayer, Input } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { ListPicker } from "ui/list-picker";
import { PlayerGridOption } from "../app.component";

@Component({
  moduleId: module.id,
  selector: "dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public players: Player[];

  @Input()
  public playerGridOption: PlayerGridOption;

  constructor () {
  }

  public ngOnInit() {
    this.players = new Array<Player>();

    for (let i = 0; i < this.playerGridOption.playerCount; i++) {
      let player = new Player();
      player.name = "Player " + i.toString();
      player.score = 50;

      this.players.push(player);
    }
  }

  public incrementClicked(player: Player, delta: number): void {
    player.score += delta;
  }
}

export class Player {
  public name: string;
  public score: number;
}