import { Schema } from "mongoose";
import { randomUUID } from "crypto";
import handleMongooseError from '../helpers/handleMongooseError.js';

const chatSchema = new Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    role: {
        type: String,
        required: [true, 'Role is required'],
    },
    content: {
        type: String,
        required: [true, 'Content cannot be empty'],
    },
});

chatSchema.post("save", handleMongooseError);

export default chatSchema;