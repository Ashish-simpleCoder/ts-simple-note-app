import asyncWrapper from "../../asyncWrapper/asyncWrapper"
import { NextFunction, Request, Response } from "express"
import { returnLoggedUser } from "../../middlewares/authUser"
import USER_MODEL, { UserType } from "../../schemas/user.schema"

export const changeNoteColor = asyncWrapper( async (req:Request, res:Response, next:NextFunction) => {

    const payload:any = returnLoggedUser(req,res,next)
    const user: UserType = await USER_MODEL.findById(payload._id)
    if(!user) return next({status:400,error:'unauthorised user'})

    const _id = req.params.note_id
    const { bg } = req.body

    const {matchedCount} = await USER_MODEL.updateOne(
        {_id:payload._id,'notes._id':_id},
        {$set:{
            'notes.$.bg':bg
        }}
    )
    if(!matchedCount) return next({status:404, error:'note not found'})
    return res.send({success : true})

})