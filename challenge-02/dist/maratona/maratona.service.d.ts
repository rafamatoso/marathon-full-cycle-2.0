import { Repository } from 'typeorm';
import { Maratona } from './maratona.entity';
export declare class MaratonaService {
    private readonly maratonaRepository;
    constructor(maratonaRepository: Repository<Maratona>);
    findAll(): Promise<Maratona[]>;
    findById(id: string): Promise<Maratona>;
    create(maratona: Maratona): Promise<void>;
}
