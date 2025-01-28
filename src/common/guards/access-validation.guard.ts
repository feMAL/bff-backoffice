import {
    Injectable,
    CanActivate,
    ExecutionContext,
    HttpException,
  } from '@nestjs/common';
  import { ConfigService } from '@nestjs/config';
  import { Request } from 'express';
  import { HttpService } from '@nestjs/axios';
import config from '../../config/external-servers/configuration'


  @Injectable()
  export class AccessValidationGuard implements CanActivate {
    constructor(
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {

      const request: Request = context.switchToHttp().getRequest();
      const allowedAccess = await this.validation(request);
  
      /* istanbul ignore next */
      if (allowedAccess?.status === 200) {
        return true;
      }
    }
  
    async validation({ headers }: Request): Promise<any> {
      try {
        const { url } =
          config().services.authorizator;

        const authorization = headers['authorization'];
          
        /* istanbul ignore next */
        
        const res = await fetch(`${url}/auth/validate`,{
          headers: {
            authorization
          }
        })
        return res;

        /* istanbul ignore next */
      } catch (error) {
        /* istanbul ignore next */
        throw new HttpException({ errors: error.response.data.errors }, error.response.status);
      }
    }
  }
  