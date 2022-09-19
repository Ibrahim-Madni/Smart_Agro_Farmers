import {Schema, model} from 'mongoose';
import Post from '@/resources/post/post.interface';

const PostSchema =new Schema (
    {

    UserName: {
        type: String,
        required: true,
        },
    
    email: [
    {
      type: String,
      lowercase: true,
      select: false,
      index: {
        unique: true,
      },
    },
    ],
    emailVerified: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        select: false,
        minlength: [8, "Password must contain atleast 8 characters"],
    //    set: function (password) {
    //      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    //},
    //age: Number,
    contact: [String],
    contactType: {
        type: String,
        enum: ["email", "phone"],
        default: "email",
    },
    shipping: [
        {
      city: String,
      state: String,
      postal: Number,
        },
    ],
    joinDate: {
        type: Date,
        default: new Date(),
    },
    

    title:{
        type : String,
        reqired : true,
    },
    body:{
        type:String,
        required: true,
    },
},

    }
);
export default model<Post> ('Post',PostSchema) 