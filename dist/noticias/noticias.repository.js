"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticiasRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const noticias_model_1 = require("./noticias.model");
let noticiasRepository = class noticiasRepository extends typeorm_1.Repository {
    async criarNoticia(newNoticia) {
        const { titulo, descricao, texto_completo } = newNoticia;
        let noticia = this.create({
            titulo,
            descricao,
            texto_completo,
            versao: 1
        });
        return await this.save(noticia);
    }
    async atualizarNoticia(id, noticia) {
        let noti;
        try {
            noti = await this.findOneOrFail(id);
        }
        catch (erro) {
            throw new common_1.NotFoundException();
        }
        this.merge(noti, noticia);
        return await this.save(noti);
    }
    async ListarTodas() {
        return this.createQueryBuilder('noticia').getMany();
    }
    async SelecionarPorId(id) {
        try {
            let noticia = await this.findOneOrFail(id);
            return noticia;
        }
        catch (erro) {
            throw new common_1.NotFoundException();
        }
    }
};
noticiasRepository = __decorate([
    (0, typeorm_1.EntityRepository)(noticias_model_1.Noticia)
], noticiasRepository);
exports.noticiasRepository = noticiasRepository;
//# sourceMappingURL=noticias.repository.js.map