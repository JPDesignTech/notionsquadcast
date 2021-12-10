import { Module } from '@nestjs/common';
import { SquadcastService } from './squadcast.service';
import { SquadcastController } from './squadcast.controller';

@Module({
  controllers: [SquadcastController],
  providers: [SquadcastService]
})
export class SquadcastModule {}
