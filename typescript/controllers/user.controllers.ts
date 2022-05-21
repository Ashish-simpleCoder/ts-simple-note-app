import { NextFunction, Request, Response } from "express";
import asyncWrapper from "../asyncWrapper/asyncWrapper";
import USER_MODEL, { UserType } from "../schemas/user.schema";
import genLoginError from "../utils/loginError";
import { compare } from "bcrypt";
import generateLoginToken from "../utils/genLoginToken";
import throwRequiredFieldErr from "../utils/throwRequiredFieldErr";
import {ILoginRes} from '../../type'


export const handleRegister = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    await USER_MODEL.create(req.body,(err:Error, user:UserType)=>{
        if(err) return next(err)
        return res.status(201).send({_id:user._id})
    })
})


export const handleLogin = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const {email, password} = req.body;

    (!email || !password) && throwRequiredFieldErr(email, password, next);

    USER_MODEL.findOne({email}, async(err:Error, user:UserType)=>{
        if(!user) return next(genLoginError('email'))

        const isTruePass = await compare(password, user.password)
        if(!isTruePass) return next(genLoginError('password'))

        const COOKIE_NAME = process.env.COOKIE_NAME || 'cookie_name'
        const encoded_jwt_cookie = generateLoginToken(user)

        res.cookie(COOKIE_NAME, encoded_jwt_cookie, {
            maxAge: 200000000,
            sameSite: 'none',
            secure: true,
            path: '/',
            httpOnly: true,
        })
        const response: ILoginRes= {_id:user._id, email:user.email}
        return res.send(response)
    })
})


export const handleLogout = asyncWrapper(async(req:Request, res:Response, next:NextFunction)=>{
    const cookie_name = process.env.COOKIE_NAME || 'cookie_name'
    return res.cookie(cookie_name,'',{maxAge:10}).send({success:true})
})