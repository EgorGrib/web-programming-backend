import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import {delay, tap, Observable} from 'rxjs';
import {randomInt} from "crypto";
import * as hbs from 'hbs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const now = Date.now();
        let ms = randomInt(100, 500);
        return next.handle().pipe(
                tap(() => {
                    hbs.registerHelper('time', function () {
                        return Date.now() - now;
                    })
                })
        );
    }
}