const asyncWrapper = (fn: Function) => {
    return async()=>{
        try{
            console.log('asyn')
            await fn()
        }catch(error){
            return error
        }
    }
}
export default asyncWrapper