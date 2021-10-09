"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditarNoticiaModule = void 0;
const common_1 = require("@nestjs/common");
const noticias_module_1 = require("../noticias/noticias.module");
const redator_module_1 = require("../redator/redator.module");
const editar_noticia_controller_1 = require("./editar-noticia.controller");
const editar_noticia_service_1 = require("./editar-noticia.service");
let EditarNoticiaModule = class EditarNoticiaModule {
};
EditarNoticiaModule = __decorate([
    (0, common_1.Module)({
        imports: [redator_module_1.RedatorModule, noticias_module_1.NoticiasModule],
        controllers: [editar_noticia_controller_1.EditarNoticiaController],
        providers: [editar_noticia_service_1.EditarNoticiaService]
    })
], EditarNoticiaModule);
exports.EditarNoticiaModule = EditarNoticiaModule;
//# sourceMappingURL=editar-noticia.module.js.map