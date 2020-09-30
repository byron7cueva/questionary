import { AbstUseCase } from '../usecase/AbstUseCase';
import { AbstRepository } from '../repository/AbstRepository';

/**
 * Abstract Gateway class for define gateway implamentation
 */
export abstract class AbstGateway<T extends AbstUseCase<AbstRepository>> {
  constructor(protected useCase: T) {}
}