"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var screen_1 = require('app/screen');
var MenuComponent = (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent() {
        _super.apply(this, arguments);
    }
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu-component',
            templateUrl: 'menu.html'
        })
    ], MenuComponent);
    return MenuComponent;
}(screen_1.Screen));
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.js.map