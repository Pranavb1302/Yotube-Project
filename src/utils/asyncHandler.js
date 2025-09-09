// using promise
const asyncHandler = (requestHandler)=>{
    // we will return promise here
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((error)=> next(error))
    }
}
    
    export {asyncHandler}

// using tyr catch block
/*
    const asyncHandler = (fn)=> async(req,res,next)=>{
        try {
            await fn(req,res,next)
        } catch (error) {
            res.status(error.code || 500).json({
                success:false,
                message:error.message
            })
        }
    } //implicit return this is a higher order function( function which can accept fn as input and can return function as val)
*/