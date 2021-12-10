import { Injectable } from '@nestjs/common';
import { CreateSquadcastDto } from './dto/create-squadcast.dto';
import { UpdateSquadcastDto } from './dto/update-squadcast.dto';

@Injectable()
export class SquadcastService {
    create(createSquadcastDto: any) {
        console.log(`🐛 🐞  createSquadcastDto ➡ ${JSON.stringify(createSquadcastDto, null, 2)} 🐞 🐛 `);

        return 'This action adds a new squadcast';
    }

    findAll() {
        return `This action returns all squadcast`;
    }

    findOne(id: number) {
        return `This action returns a #${id} squadcast`;
    }

    update(id: number, updateSquadcastDto: UpdateSquadcastDto) {
        return `This action updates a #${id} squadcast`;
    }

    remove(id: number) {
        return `This action removes a #${id} squadcast`;
    }
}
