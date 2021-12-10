import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotionModule } from './notion/notion.module';
import { SquadcastModule } from './squadcast/squadcast.module';

@Module({
  imports: [NotionModule, SquadcastModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
