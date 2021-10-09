"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redator = void 0;
const noticias_model_1 = require("../noticias/noticias.model");
const typeorm_1 = require("typeorm");
let Redator = class Redator {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Redator.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Redator.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Redator.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Redator.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => noticias_model_1.Noticia, noticia => noticia.user, { eager: true }),
    __metadata("design:type", Array)
], Redator.prototype, "noticia", void 0);
Redator = __decorate([
    (0, typeorm_1.Entity)()
], Redator);
exports.Redator = Redator;
//# sourceMappingURL=redator.model.js.map