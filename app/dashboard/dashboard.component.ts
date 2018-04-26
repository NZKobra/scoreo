import { Component, OnInit, OnDestroy, AnimationPlayer, Input } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { ListPicker } from "ui/list-picker";
import { PlayerGridOption } from "../app.component";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from "rxjs/Subscription";

@Component({
  moduleId: module.id,
  selector: "dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  public players: Player[];
  private playerGridOptionSubscription: Subscription;

  @Input()
  public playerGridOptionSubject: BehaviorSubject<PlayerGridOption>;
  protected playerGridOption: PlayerGridOption;

  constructor () {
  }

  public ngOnInit() {
    this.playerGridOptionSubscription = this.playerGridOptionSubject
      .subscribe(option => {
        this.playerGridOption = option;
        this.initPlayerGridOption();
      });
  }

  public ngOnDestroy() {
    this.playerGridOptionSubscription.unsubscribe();
  }

  public incrementClicked(player: Player, delta: number): void {
    player.score += delta;
  }

  private initPlayerGridOption(): void {
    this.players = new Array<Player>();

    for (let i = 0; i < this.playerGridOption.playerCount; i++) {
      let player = new Player();
      player.name = "Player " + i.toString();
      player.score = 50;

      this.players.push(player);
    }
  }
}

export class Player {
  public name: string;
  public score: number;
}