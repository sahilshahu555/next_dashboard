import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    username:{ type:String, required:true, unique:true, min:3, max:20, },
    email:{ type:String, required:true, unique:true,  max:50, },
    password:{ type:String, required:true, unique:true, min:6, max:20, },
    image:{ type:String, },
    isAdmin:{ type:Boolean, default:false },
},{timestamps:true});


const blogSchema= new mongoose.Schema({
    title:{ type:String, required:true, },
    desc:{ type:String, required:true,  },
    image:{ type:String, },
    slug:{ type:String, required:true,unique:true, },
},{timestamps:true});


export const User= mongoose.models.User || mongoose.model("User",userSchema);
export const Blog= mongoose.models.Blog || mongoose.model("Blog",blogSchema);