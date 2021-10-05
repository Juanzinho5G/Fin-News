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
exports.RedatorController = void 0;
const common_1 = require("@nestjs/common");
const create_redator_dto_1 = require("./dto/create.redator.dto");
const redator_service_1 = require("./redator.service");
let RedatorController = class RedatorController {
    constructor(redatorService) {
        this.redatorService = redatorService;
    }
    async cadasatrarRedator(body) {
        return await this.redatorService.cadastrar(body);
    }
};
__decorate([
    (0, common_1.Post)('/cadastrar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_redator_dto_1.RedatorCreateDto]),
    __metadata("design:returntype", Promise)
], RedatorController.prototype, "cadasatrarRedator", null);
RedatorController = __decorate([
    (0, common_1.Controller)('redator'),
    __metadata("design:paramtypes", [redator_service_1.RedatorService])
], RedatorController);
exports.RedatorController = RedatorController;
//# sourceMappingURL=redator.controller.js.map