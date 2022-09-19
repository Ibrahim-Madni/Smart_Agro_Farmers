import {Document} from 'mongoose';
import { StringLiteral } from 'typescript';

export default interface Post extends Document {
    Username: String;
    email: String;
    emailVerified : boolean;
    password : String;
    age: number;
    contact: String;
    contactType: String;
    shipping:[
        city: String,
        state: String,
        postal: Number
    ];
    joinDate: {
        type: Date
    }
}