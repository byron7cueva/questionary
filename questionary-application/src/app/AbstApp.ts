import { DependencyContainer, container } from "tsyringe";
import { ContainerToken } from 'questionary-domain';

import { CourseUseCase, CourseGateway } from '../course';
import { QuestionUseCase, QuestionGateway } from '../question';

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

    this.container.register(ContainerToken.getInstance().AbstQuestionUseCase, {
      useClass: QuestionUseCase
    })
  }

  /**
   * Return CourseGateway instance
   * 
   * @return {CourseGateway} Intance of CourseGateway
   */
  getCourseGateway(): CourseGateway {
    return this.container.resolve(CourseGateway);
  }

  /**
   * Return QuestionGateway instance
   */
  getQuestionGateway(): QuestionGateway {
    return this.container.resolve(QuestionGateway);
  }
}