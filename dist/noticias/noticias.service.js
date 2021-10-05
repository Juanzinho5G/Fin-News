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
const noticias_repository_1 = require("./noticias.repository");
let NoticiasService = class NoticiasService {
    constructor(noticia) {
        this.noticia = noticia;
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
};
NoticiasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [noticias_repository_1.noticiasRepository])
], NoticiasService);
exports.NoticiasService = NoticiasService;
//# sourceMappingURL=noticias.service.js.map