import {Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/Interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validationMiddleware';
import validate from '@/resources/post/post.validation';
import PostService from '@/resources/post/post.service';

class PostController implements Controller{
    public path='/posts';
    public router=Router();

    constructor(){
        this.initializeRoutes();
    }
    private initializeRoutes() :void {
        
    }
}