import { PartialType } from '@nestjs/mapped-types';
import { CreateSquadcastDto } from './create-squadcast.dto';

export class UpdateSquadcastDto extends PartialType(CreateSquadcastDto) {}
