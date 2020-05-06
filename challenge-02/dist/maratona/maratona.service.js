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
const typeorm_1 = require("typeorm");
const maratona_entity_1 = require("./maratona.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MaratonaService = class MaratonaService {
    constructor(maratonaRepository) {
        this.maratonaRepository = maratonaRepository;
    }
    async findAll() {
        return this.maratonaRepository.find();
    }
    async findById(id) {
        return this.maratonaRepository.findOne(id);
    }
    async create(maratona) {
        await this.maratonaRepository.save(maratona);
    }
};
MaratonaService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(maratona_entity_1.Maratona)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MaratonaService);
exports.MaratonaService = MaratonaService;
//# sourceMappingURL=maratona.service.js.map