const{CustomAPIError}=require(`../errors/custom-error`)
const errorHandlerMiddleware =(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.status(err.Statuscode).json(msg,err.message)
    }
    return res.status(error.status).json({msg:`something went wrong,try again`})
    console.log(err)
}
module.exports=errorHandlerMiddleware
