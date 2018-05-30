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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var core_1 = require('@angular/core');
var smartux_client_1 = require('smartux-client');
var Hooks = (function (_super) {
    __extends(Hooks, _super);
    function Hooks() {
        _super.apply(this, arguments);
    }
    /**
     * Initial parameters to send to the server.
     */
    Hooks.prototype.getServerInitParams = function () {
        return __awaiter(this, void 0, Promise, function* () {
            return {};
        });
    };
    /**
     * Initialize the UI with data from the server.
     */
    Hooks.prototype.initializeUI = function (params) {
    };
    /**
     * Override what happens when going to a new screen.
     */
    Hooks.prototype.overrideStateHandler = function (oldScreen, newScreen, data) {
        return newScreen;
    };
    /**
     * Override what happens when a custom URL scheme is called.
     *
     * type - 'event' is currently the only supported type.
     * name - Name of event, e.g. 'login.submit'
     * data - JSON object containing URL data.
     *
     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
     *          false - Don't continue with the normal flow.
     */
    Hooks.prototype.interceptCustomURLScheme = function (type, name, data) {
        return __awaiter(this, void 0, Promise, function* () {
            return true;
        });
    };
    Hooks = __decorate([
        core_1.Injectable()
    ], Hooks);
    return Hooks;
}(smartux_client_1.AppHooks));
exports.Hooks = Hooks;
//# sourceMappingURL=app.hooks.js.map