import { ReactNode } from "react"

const If = ( {condition, children} : {condition:any, children:ReactNode} ) =>{
    if(!!condition){
        return <>{children}</>
    }
    return null
}
export default If