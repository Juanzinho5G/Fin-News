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
exports.EditarNoticiaService = void 0;
const common_1 = require("@nestjs/common");
const noticias_service_1 = require("../noticias/noticias.service");
let EditarNoticiaService = class EditarNoticiaService {
    constructor(noticias) {
        this.noticias = noticias;
    }
    async Editar(id, user) {
        return await this.noticias.iniciarEdicao(id, user);
    }
    async Concluir(id, user) {
        return this.noticias.terminarEdicao(id, user);
    }
    async getAllByUser(user) {
        return this.noticias.getAllByUser(user);
    }
};
EditarNoticiaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [noticias_service_1.NoticiasService])
], EditarNoticiaService);
exports.EditarNoticiaService = EditarNoticiaService;
//# sourceMappingURL=editar-noticia.service.js.map