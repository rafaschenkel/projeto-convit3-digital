import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { timeStamp } from "console";
import { Request, Response } from "express";

@Catch(Error)
export default class ErroFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = (exception as any).getStatus
      ? (exception as any).getStatus()
      : "500";

    response.status(status).json({
      statusCode: status,
      timeStamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
    });
  }
}
