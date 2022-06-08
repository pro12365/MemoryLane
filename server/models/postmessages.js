import mongoose from 'mongoose';
const posttype= mongoose.Schema({
title: String,
message:String,
creator:String,
tags:[String],
Selectedfile: String,
likecount:{
type:Number,
default:0
},
createdate:
{
 type:Number,
 default: new Date()
}
});
const createpost= mongoose.model('createpost',posttype);
export default createpost;