import { Schema, model } from "mongoose";
import handleMongooseError from '../helpers/handleMongooseError.js';
import chatSchema from '../models/chat-model.js';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [emailRegexp, 'Invalid email format'],
    },
    password: {
        type: String,
        required: [true,  'Password is required'],
        match: [passwordRegexp, 'Invalid password format'],
        minlength: 8,
    },
    chats: [chatSchema],
});

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

export default User;