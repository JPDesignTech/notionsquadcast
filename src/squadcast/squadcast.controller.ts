import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SquadcastService } from './squadcast.service';
import { CreateSquadcastDto } from './dto/create-squadcast.dto';
import { UpdateSquadcastDto } from './dto/update-squadcast.dto';

@Controller('squadcast')
export class SquadcastController {
    constructor(private readonly squadcastService: SquadcastService) {}

    @Post()
    create(@Body() createSquadcastDto: any) {
        return this.squadcastService.create(createSquadcastDto);
    }

    @Get()
    findAll() {
        return this.squadcastService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.squadcastService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSquadcastDto: UpdateSquadcastDto) {
        return this.squadcastService.update(+id, updateSquadcastDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.squadcastService.remove(+id);
    }
}
