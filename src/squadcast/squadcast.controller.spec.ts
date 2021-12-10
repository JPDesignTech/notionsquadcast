import { Test, TestingModule } from '@nestjs/testing';
import { SquadcastController } from './squadcast.controller';
import { SquadcastService } from './squadcast.service';

describe('SquadcastController', () => {
  let controller: SquadcastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquadcastController],
      providers: [SquadcastService],
    }).compile();

    controller = module.get<SquadcastController>(SquadcastController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
