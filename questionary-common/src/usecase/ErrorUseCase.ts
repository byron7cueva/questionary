export class ErrorUseCase extends Error {
  name = 'ErrorUseCase';

  constructor(message: string, stack: string = '') {
    super(message);
    this.stack = `
      \r${this.stack}
      \r${stack}
    `;
  }
}