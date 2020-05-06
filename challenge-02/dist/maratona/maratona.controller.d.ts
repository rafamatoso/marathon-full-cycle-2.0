import { CreateMaratonaDto } from './create-maratona.dto';
import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';
export declare class MaratonaController {
    private readonly maratonaService;
    constructor(maratonaService: MaratonaService);
    findAll(): Promise<Maratona[]>;
    findById(id: string): Promise<Maratona>;
    create(createMaratonaDto: CreateMaratonaDto): Promise<void>;
}
