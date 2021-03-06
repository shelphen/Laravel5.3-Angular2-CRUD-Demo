System.register(['angular2/core', "../../../services/api", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, api_1, router_1;
    var PessoaRemoveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let PessoaRemoveComponent = class PessoaRemoveComponent {
                constructor(_api) {
                    this._api = _api;
                }
                remove(id) {
                    this._api.deletePessoa(id);
                    jQuery("#remove-pessoa").modal("hide");
                    jQuery("#item-" + id).remove();
                }
            };
            __decorate([
                core_1.Input('pessoa'), 
                __metadata('design:type', Object)
            ], PessoaRemoveComponent.prototype, "pessoa", void 0);
            PessoaRemoveComponent = __decorate([
                core_1.Component({
                    selector: 'pessoa-remove',
                    templateUrl: './app/components/pessoas/remove/index.html',
                    directives: [router_1.ROUTER_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [api_1.Api])
            ], PessoaRemoveComponent);
            exports_1("PessoaRemoveComponent", PessoaRemoveComponent);
        }
    }
});
//# sourceMappingURL=PessoaRemoveComponent.js.map