"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedatorRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const redator_model_1 = require("./redator.model");
const bcrypt = require("bcrypt");
let RedatorRepository = class RedatorRepository extends typeorm_1.Repository {
    async cadastrarRedator(redator) {
        const { nome, email, senha } = redator;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(senha, salt);
        let reda = this.create({
            nome,
            email,
            senha: hashPassword,
        });
        try {
            return await this.save(reda);
        }
        catch (error) {
            if (error.code == 23505) {
                throw new common_1.ConflictException('usuário já cadastrado');
            }
            else {
                throw error;
            }
        }
    }
    async buscar(email) {
        return await this.findOne({ email });
    }
};
RedatorRepository = __decorate([
    (0, typeorm_1.EntityRepository)(redator_model_1.Redator)
], RedatorRepository);
exports.RedatorRepository = RedatorRepository;
//# sourceMappingURL=redator.repository.js.map