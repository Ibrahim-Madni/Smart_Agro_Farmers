import {Request, Response, NextFunction} from 'express';
import axios, {AxiosResponse} from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title : String;
    body : String;
}

const getPosts= async(req:Request, res: Response, next :NextFunction)=>{
    let result: AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
    let posts: [Post] =result.data;
    return res.status(200).json({
        message:posts
    })
}

const getPost =async(req:Request, res: Response, next: NextFunction)=>{
    let id: string =req.params.id;

    let result: AxiosResponse= await axios.get('https:jsonplaceholder.typicode.com/posts/${id}');
    let post: Post =result.data;
    return res.status(200).json({
        messsage:post
    })
}
const updatePost =async (req:Request, res: Response, next: NextFunction)=>{
    let id: string =req.params.id;
    let title: string =req.body.title ?? null;
    let body: string =req.body.body ?? null;
    let response:AxiosResponse=await axios.put('https:jsonplaceholder.typicode.com/posts/${id}',{
        ...(title && {title}),
        ...(body && {body})
    }) 
}
const deletePost =async (req:Request, res: Response, next: NextFunction)=>{
    let id: string = req.params.id;
    let response: 
}
