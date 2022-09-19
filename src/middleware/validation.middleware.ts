import e, {Request, Response, NextFunction, RequestHandler} from 'express';
import Joi from 'joi';
import { Schema } from 'mongoose';

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
            stripUnknown: true,
        }
        try{
            const value = await schema.validateAsync(
                req.body, 
                ValidationOptions
            );
            req.body = value;
            next();
        }
    
    catch(error){
        const errors: string[] = [];
        e.details.forEach((errors:Joi.ValidationErrorItem)=>{
            errors.push(errors.message)
        });
        res.status(400).send({errors})
    }
}
}
export default validationMiddleware;