

function log(req,res,next){
    console.log("authenticate..");
    next();

}

module.exports = log//here we expoting single log function form this module