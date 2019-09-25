import { TestBed } from '@angular/core/testing';

import { FoodLogicService } from './food-logic.service';

describe('FoodLogicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodLogicService = TestBed.get(FoodLogicService);
    expect(service).toBeTruthy();
  });
});
