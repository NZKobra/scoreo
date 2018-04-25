import { Component, OnInit, OnDestroy, AnimationPlayer, ViewChild, AfterViewInit, ChangeDetectorRef } from "@angular/core";
import { FlexboxLayout } from "tns-core-modules/ui/layouts/flexbox-layout";
import { ListPicker } from "ui/list-picker";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  moduleId: module.id,
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent implements OnInit {
  public playerGridOptions: PlayerGridOption[];
  public selectedPlayerGridOptionIndex: number;

  constructor (private _changeDetectionRef: ChangeDetectorRef) {
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
  }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  public ngOnInit() {
  }

  public openDrawer() {
    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    this.drawer.closeDrawer();
  }
}

export class PlayerGridOption {
  public name: string;
  public gridClass: string;
  public playerCount: number;
}