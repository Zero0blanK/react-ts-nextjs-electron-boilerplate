export class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode = 500, name = "AppError") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class MangaFetchError extends AppError {
  constructor(message = "Failed to fetch manga data") {
    super(message, 500, "MangaFetchError");
  }
}

export class MangaNotFoundError extends AppError {
  constructor(message = "Manga not found") {
    super(message, 404, "MangaNotFoundError");
  }
}

export class PrismaError extends AppError {
  constructor(message = 'Database operation failed', statusCode = 500) {
    super(message, statusCode, 'PrismaError');
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(message = 'Service unavailable') {
    super(message, 503, 'ServiceUnavailableError');
  }
}

export class TimeoutError extends AppError {
  constructor(message = 'Request timeout') {
    super(message, 504, 'TimeoutError');
  }
}