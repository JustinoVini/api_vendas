class AppError {
  // usuario vai receber uma mensagem e o status code do erro dele
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
