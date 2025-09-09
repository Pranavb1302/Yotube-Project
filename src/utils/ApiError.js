class  ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        errors=[],
        stack = "" // error stack (claude expalin this in detail)

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null // (claude tell me why this data feild is done null here in great detail)
        this.message = message
        this.success = false
        this.errors = errors;
        
        // the below code is written in production grade (claudeexplain this line by line in great detail simple lang)
        // this is written because the backend person would get a trace where in which files is what error which could potentially help in debugging
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
        
    }
}
export {ApiError}