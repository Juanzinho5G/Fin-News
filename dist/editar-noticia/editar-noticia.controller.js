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
exports.EditarNoticiaController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const _jwt_auth_guard_1 = require("../auth/ jwt-auth.guard");
const get_user_decorator_1 = require("../auth/get-user-decorator");
const redator_model_1 = require("../redator/redator.model");
const editar_noticia_service_1 = require("./editar-noticia.service");
let EditarNoticiaController = class EditarNoticiaController {
    constructor(edit) {
        this.edit = edit;
    }
    Editar(id, user) {
        return this.edit.Editar(id, user);
    }
    Concluir(id, user) {
        return this.edit.Concluir(id, user);
    }
    getUserEditando(user) {
        return this.edit.getAllByUser(user);
    }
};
__decorate([
    (0, common_2.Post)('/editar/:id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, redator_model_1.Redator]),
    __metadata("design:returntype", void 0)
], EditarNoticiaController.prototype, "Editar", null);
__decorate([
    (0, common_2.Post)('/Concluir/:id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, redator_model_1.Redator]),
    __metadata("design:returntype", void 0)
], EditarNoticiaController.prototype, "Concluir", null);
__decorate([
    (0, common_1.UseGuards)(_jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/editando/user/'),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [redator_model_1.Redator]),
    __metadata("design:returntype", void 0)
], EditarNoticiaController.prototype, "getUserEditando", null);
EditarNoticiaController = __decorate([
    (0, common_1.UseGuards)(_jwt_auth_guard_1.JwtAuthGuard),
    (0, common_2.Controller)('editar-noticia'),
    __metadata("design:paramtypes", [editar_noticia_service_1.EditarNoticiaService])
], EditarNoticiaController);
exports.EditarNoticiaController = EditarNoticiaController;
//# sourceMappingURL=editar-noticia.controller.js.map