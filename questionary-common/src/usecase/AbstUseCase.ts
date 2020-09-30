import { AbstRepository } from '../repository/AbstRepository';

/**
 * Abstract class UseCase for define implementation UseCase
 */
export abstract class AbstUseCase<T extends AbstRepository> {
  constructor(protected repository: T) {}
}