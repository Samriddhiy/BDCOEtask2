// This one is of promises 

const asyncHandler = (requestHandler) => {
    return (req, res, next )=> {
        Promise.resolve((req, res, next)).
        catch((err) => next(err))
    }
}



export { asyncHandler}


// This one is of try catch 


//const asyncHandler = () => {}
//const asyncHandler = (func) => (() => {} )
//const asyncHandler = (func) => async () => {} 

 // const asyncHandler = (fn) => async (req , res , next) => {
 //   try {
 //       await fn(req, res, next)
//  } catch (error) {
 //       res.status(err.code || 500).json({
 //           success: false, 
  //          message: err.message
 //       })
        
 //   }
//} 