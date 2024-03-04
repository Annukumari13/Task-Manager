class CustomAPIError extends Error{
    constructor(message,StatusCode)
    {
        super(message)
        this.StatusCode =StatusCode
    }
}
const CreateCustomError =(msg,StatusCode)=>{
    return new CustomAPIError(msg,StatusCode)
}
module.exports={CreateCustomError,CustomAPIError}
