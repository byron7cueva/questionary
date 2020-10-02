/**
 * Singleton for resolve tokens of instance register on container
 */
export class ContainerToken {

  /**
   * Instance of ContainerToken
   * 
   * @private
   * @static
   */
  private static instance: ContainerToken;

  /**
   * Private constructor
   * 
   * @private
   */
  private constructor(){}

  /**
   * Return instance of ContainerToken
   * 
   * @static
   * @return {ContainerToken} Instance
   */
  static getInstance(): ContainerToken {
    if(!ContainerToken.instance) {
      ContainerToken.instance = new ContainerToken();
    }
    return ContainerToken.instance;
  }

  /* Repositories */

  /**
   * Return token of AbstCourseRepository
   * 
   * @return {string} Token
   */
  get AbstCourseRepository(): string { return 'AbstCourseRepository' };
  get AbstQuestionRepository(): string { return 'AbstQuestionRepository' };

  /* UseCase */

  /**
   * Return token of AbstCourseUseCase
   * 
   * @return {string} Token
   */
  get AbstCourseUseCase(): string { return 'AbstCourseUseCase' };
  get AbstQuestionUseCase(): string { return 'AbstQuestionUseCase' };
}