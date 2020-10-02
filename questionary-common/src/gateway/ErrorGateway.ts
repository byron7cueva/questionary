export class ErrorGateway extends Error {
  name = 'ErrorGateway';

  constructor(message: string, stack: string = '') {
    super(message);
    this.stack = `
      \r${this.stack}
      \r${stack}
    `;
  }
}