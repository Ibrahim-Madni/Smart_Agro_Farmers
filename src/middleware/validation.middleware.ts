import {Request, Response, NextFunction, RequestHandler} from 'express';
import Joi from 'joi';

function validationMiddleware(schema:Joi.Schema): RequestHandler
{
    return async(
        req:Request, 
        res:Response, 
        next: NextFunction,

    ): Promise<void> =>{
        const ValidationOptions={
            abortEarly :false,
            allowUnkown: true,
            
        }
    }
}