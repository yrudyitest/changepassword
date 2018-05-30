"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var smartux_client_1 = require('smartux-client');
var components_1 = require('components');
var app_screens_1 = require('./app.screens');
var app_component_1 = require('./app.component');
var app_hooks_1 = require('./app.hooks');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [ionic_angular_1.IonicApp],
            declarations: [app_component_1.ClientApp].concat(app_screens_1.Screens.declarations),
            entryComponents: app_screens_1.Screens.declarations,
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.ClientApp, smartux_client_1.config.ionic),
                smartux_client_1.SmartUxClient,
                components_1.ComponentsModule
            ],
            providers: [
                app_hooks_1.Hooks
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map