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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiasController = void 0;
const common_1 = require("@nestjs/common");
const _jwt_auth_guard_1 = require("../auth/ jwt-auth.guard");
const criar_noticia_dto_1 = require("./dto/criar-noticia.dto");
const noticias_service_1 = require("./noticias.service");
let NoticiasController = class NoticiasController {
    constructor(noticia) {
        this.noticia = noticia;
    }
    async criarNoticia(body) {
        return await this.noticia.criarNoticia(body);
    }
    async editarNoticia(id, body) {
        return await this.noticia.editarNoticia(id, body);
    }
    async listarTodas() {
        return await this.noticia.listarTodas();
    }
    async selecionarNoticia(id) {
        return await this.noticia.Selecionar(id);
    }
};
__decorate([
    (0, common_1.Post)('/criar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_noticia_dto_1.CriarNoticiaDto]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "criarNoticia", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, criar_noticia_dto_1.CriarNoticiaDto]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "editarNoticia", null);
__decorate([
    (0, common_1.Get)("/listar"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "listarTodas", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoticiasController.prototype, "selecionarNoticia", null);
NoticiasController = __decorate([
    (0, common_1.UseGuards)(_jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('noticias'),
    __metadata("design:paramtypes", [noticias_service_1.NoticiasService])
], NoticiasController);
exports.NoticiasController = NoticiasController;
//# sourceMappingURL=noticias.controller.js.map