import { Test, TestingModule } from '@nestjs/testing';
import { SquadcastService } from './squadcast.service';

describe('SquadcastService', () => {
  let service: SquadcastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SquadcastService],
    }).compile();

    service = module.get<SquadcastService>(SquadcastService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
