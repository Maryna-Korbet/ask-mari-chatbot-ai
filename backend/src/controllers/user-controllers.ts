import {  Request,  Response, NextFunction } from 'express';
import User from '../models/user-modal.js';
import HttpError from '../helpers/HttpError.js';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        console.log(users);
        return res.status(200).json({ massage: "Ok", users });
    }
    catch (error) {
        throw HttpError(404, "User not found");
    }
};
