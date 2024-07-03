module.exports = (err,req,res,next) =>{
    let statusCode = err.statusCode || 500
    res.statuse(statusCode).json({error:err.message})
}