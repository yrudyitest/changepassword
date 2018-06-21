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
var blank_PhonePortrait = (function (_super) {
    __extends(blank_PhonePortrait, _super);
    function blank_PhonePortrait() {
        _super.apply(this, arguments);
    }
    blank_PhonePortrait.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        // Logic to run when the screen loads goes here.
    };
    blank_PhonePortrait.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        // Logic to run when the screen unloads goes here.
    };
    blank_PhonePortrait.prototype.onDataLoad = function (data) {
        // Logic to run when the screen's data is updated goes here.
    };
    blank_PhonePortrait = __decorate([
        core_1.Component({
            selector: 'screen-blank-phoneportrait',
            templateUrl: 'blank.html'
        })
    ], blank_PhonePortrait);
    return blank_PhonePortrait;
}(screen_1.Screen));
exports.blank_PhonePortrait = blank_PhonePortrait;
//# sourceMappingURL=blank.js.map