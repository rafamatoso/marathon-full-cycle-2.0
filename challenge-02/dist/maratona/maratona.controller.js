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
const common_1 = require("@nestjs/common");
const create_maratona_dto_1 = require("./create-maratona.dto");
const maratona_service_1 = require("./maratona.service");
const maratona_entity_1 = require("./maratona.entity");
let MaratonaController = class MaratonaController {
    constructor(maratonaService) {
        this.maratonaService = maratonaService;
    }
    async findAll() {
        return this.maratonaService.findAll();
    }
    async findById(id) {
        return this.maratonaService.findById(id);
    }
    async create(createMaratonaDto) {
        const maratona = new maratona_entity_1.Maratona(createMaratonaDto.aula);
        await this.maratonaService.create(maratona);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaratonaController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MaratonaController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_maratona_dto_1.CreateMaratonaDto]),
    __metadata("design:returntype", Promise)
], MaratonaController.prototype, "create", null);
MaratonaController = __decorate([
    common_1.Controller('maratona'),
    __metadata("design:paramtypes", [maratona_service_1.MaratonaService])
], MaratonaController);
exports.MaratonaController = MaratonaController;
//# sourceMappingURL=maratona.controller.js.map