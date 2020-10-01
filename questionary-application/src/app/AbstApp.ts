import { DependencyContainer, container, InjectionToken } from "tsyringe";

import { ContainerToken } from './ContainerToken';
import { CourseUseCase, CourseGateway } from '../course';

/**
 * Abstract App
 * Fatory for create artefacts
 */
export abstract class AbstApp {

  /**
   * Container
   */
  private _container: DependencyContainer = container;

  /**
   * Constructor of AbstApp
   */
  constructor() {
    this.registerRepositories();
    this.registerUseCase();
  }

  /**
   * Return container
   */
  protected get container(): DependencyContainer {
    return this._container;
  }

  /**
   * Register Repository instances
   */
  protected abstract registerRepositories(): void;

  /**
   * Register UseCase instances
   */
  private registerUseCase() {
    this.container.register(ContainerToken.getInstance().AbstCourseUseCase, {
      useClass: CourseUseCase
    });
  }

  /**
   * Get of container instance
   * 
   * @return {CourseGateway} Intance of CourseGateway
   */
  getCourseGateway(): CourseGateway {
    return this.container.resolve(CourseGateway);
  }
}