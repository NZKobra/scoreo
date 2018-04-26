import { Component, OnInit, OnDestroy, AnimationPlayer, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { ListPicker } from "ui/list-picker";
import { ListView, ItemEventData } from "ui/list-view";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Page } from "ui/page";
const { keepAwake, allowSleepAgain } = require("nativescript-insomnia");
const insomnia = require("nativescript-insomnia");

@Component({
  moduleId: module.id,
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  public playerGridOptions: PlayerGridOption[];
  public playerGridOptionSubject: BehaviorSubject<PlayerGridOption>;

  constructor (
    private page: Page,
    private _changeDetectionRef: ChangeDetectorRef) {  
    this.page.actionBarHidden = true;
      
    this.playerGridOptions = [
      {
        name: "2 Player",
        gridClass: "player-1x2",
        playerCount: 2
      },
      {
        name: "3 Player",
        gridClass: "player-1x3",
        playerCount: 3
      },
      {
        name: "4 Player",
        gridClass: "player-2x2",
        playerCount: 4
      }
    ];

    this.playerGridOptionSubject = new BehaviorSubject<PlayerGridOption>(this.playerGridOptions[0]);
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit(): void {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  ngOnInit(): void {
    insomnia.keepAwake();
  }

  ngOnDestroy(): void {
    insomnia.allowSleepAgain();
  }

  public playerGridOptionTap($event: ItemEventData) {
    this.playerGridOptionSubject.next(this.playerGridOptions[$event.index])
  }
}

export class PlayerGridOption {
  public name: string;
  public gridClass: string;
  public playerCount: number;
}