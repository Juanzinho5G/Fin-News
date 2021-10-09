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
exports.NoticiasService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const redator_service_1 = require("../redator/redator.service");
const noticias_repository_1 = require("./noticias.repository");
let NoticiasService = class NoticiasService {
    constructor(noticia, redator) {
        this.noticia = noticia;
        this.redator = redator;
    }
    async criarNoticia(newNoticia) {
        return await this.noticia.criarNoticia(newNoticia);
    }
    async editarNoticia(id, noticia) {
        return await this.noticia.atualizarNoticia(id, noticia);
    }
    async listarTodas() {
        return await this.noticia.ListarTodas();
    }
    async Selecionar(id) {
        return await this.noticia.SelecionarPorId(id);
    }
    async getAllByUser(user) {
        const user1 = await this.redator.findOne(user.id);
        return await this.noticia.find({ user: user1 });
    }
    async iniciarEdicao(id, user) {
        const user1 = await this.redator.findOne(user.id);
        const { affected } = await this.noticia.update({ id: id }, { user });
        if (affected == 1) {
            return { sucess: true };
        }
        else {
            throw new common_1.ConflictException("não é possível editar a noticia");
        }
    }
    async terminarEdicao(id, user) {
        const user1 = await this.redator.findOne(user.id);
        const { affected } = await this.noticia.update({ id: id, user: user1 }, { UpdateAt: new Date() });
        if (affected == 1) {
            return { sucess: true };
        }
        else {
            throw new common_1.ConflictException("não é possível editar a noticia");
        }
    }
};
NoticiasService = __decorate([
    (0, common_2.Injectable)(),
    __metadata("design:paramtypes", [noticias_repository_1.noticiasRepository,
        redator_service_1.RedatorService])
], NoticiasService);
exports.NoticiasService = NoticiasService;
//# sourceMappingURL=noticias.service.js.map