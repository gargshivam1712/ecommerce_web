import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    InternalServerErrorException
  } from "@nestjs/common";
  import { Request, Response } from 'express';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: InternalServerErrorException, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
  
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      /**
       * @description Exception json response
       * @param message
       */
      const responseMessage = (type, message) => {
        response.status(status).json(message);
      };

      

    
  
      // Throw an exceptions for either
      // MongoError, ValidationError, TypeError, CastError and Error

      responseMessage(exception.name, exception.getResponse && exception.getResponse() || exception.message);
    //   if (exception.message) {
    //     responseMessage("Error", exception.message.error);
    //   } else {
        
    //   }
    }
  }