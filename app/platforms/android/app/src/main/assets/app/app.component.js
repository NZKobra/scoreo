"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.players = new Array();
        this.players.push({ name: "Player 1", score: 50 });
        this.players.push({ name: "Player 2", score: 50 });
        this.players.push({ name: "Player 3", score: 50 });
        this.players.push({ name: "Player 4", score: 50 });
    };
    AppComponent.prototype.incrementClicked = function (player, delta) {
        player.score += delta;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEU7QUFROUU7SUFBQTtJQWNBLENBQUM7SUFYUSwrQkFBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQVksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFZLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLE1BQWMsRUFBRSxLQUFhO1FBQ25ELE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFiVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ2xDLENBQUM7T0FDVyxZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxvQ0FBWTtBQWdCekI7SUFBQTtJQUdBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIEFuaW1hdGlvblBsYXllciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGbGV4Ym94TGF5b3V0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwbGF5ZXJzOiBQbGF5ZXJbXTtcblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wbGF5ZXJzID0gbmV3IEFycmF5PFBsYXllcj4oKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaCh7IG5hbWU6IFwiUGxheWVyIDFcIiwgc2NvcmU6IDUwIH0gYXMgUGxheWVyKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaCh7IG5hbWU6IFwiUGxheWVyIDJcIiwgc2NvcmU6IDUwIH0gYXMgUGxheWVyKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaCh7IG5hbWU6IFwiUGxheWVyIDNcIiwgc2NvcmU6IDUwIH0gYXMgUGxheWVyKTtcbiAgICB0aGlzLnBsYXllcnMucHVzaCh7IG5hbWU6IFwiUGxheWVyIDRcIiwgc2NvcmU6IDUwIH0gYXMgUGxheWVyKTtcbiAgfVxuXG4gIHB1YmxpYyBpbmNyZW1lbnRDbGlja2VkKHBsYXllcjogUGxheWVyLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgcGxheWVyLnNjb3JlICs9IGRlbHRhO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgc2NvcmU6IG51bWJlcjtcbn0iXX0=