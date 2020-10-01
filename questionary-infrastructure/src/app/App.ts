import { AbstApp, ContainerToken } from 'questionary-application';

import { CourseRepository } from '../repository/CourseRepository';

/**
 * Singleton App factory implementation
 */
export class App extends AbstApp {

  /**
   * Instance of App
   * 
   * @static
   * @private
   */
  private static instance: App;

  /**
   * Constructor of App
   * 
   * @private
   */
  private constructor() {
    super();
  }

  /**
   * Return instance of App
   * 
   * @return {App} Instance
   */
  static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  /**
   * Register the repository artefacts
   */
  protected registerRepositories(): void {
    this.container.register(ContainerToken.getInstance().AbstCourseRepository, {
      useClass: CourseRepository
    });
  }
}