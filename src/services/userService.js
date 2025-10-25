import bcrypt from 'bcrypt';

import User from "../models/User.js";
import { generateAuthToken } from '../utils/tokenUtils.js';

export async function register(email, password, repeatPassword){
    const user = await User.findOne({ email });

    if(user){
        throw new Error('Потребител с такъв имейл вече съществува!!!');
    }

    if(password !== repeatPassword){
        throw new Error('Паролите трябва да съвпадат!!!');
    }

    const createdUser = await User.create({ email, password});
    const token = generateAuthToken(createdUser);
    return token;
}

export async function login(email, password){
    const user = await User.findOne({ email });

    if(!user){
        throw new Error('Няма потребител с такъв имайл или невалидана парола');

    }

    const isValid = await bcrypt.compare(password, user.password)
        if(!isValid){
            throw new Error('Невалидна парола');

        }
    
    const token = generateAuthToken(user);
    return token;

}