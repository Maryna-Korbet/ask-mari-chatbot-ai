import { Schema, model } from "mongoose";
import handleMongooseError from '../helpers/handleMongooseError.js';
import chatSchema from '../models/chat-model.js';

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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

const User = model("User", userSchema);

export default User;