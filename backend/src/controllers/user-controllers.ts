import { NextFunction, Request, Response } from 'express';
import User from "../models/User.js"
import { hash, compare } from "bcrypt"
// import bcrypt from 'bcrypt';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: 'OK', users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error', cause: error.message });
    }
};


export const userSignUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(401).send("User already registered!!");

        const hashedPassword = await hash(password, 10);

        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: 'User created successfully', id: user._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error', cause: error.message });
    }
};

// login 
export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).send("User not Found!!");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password");
        }

         return res.status(200).json({ message: 'OK', id: user._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error', cause: error.message });
    }
};