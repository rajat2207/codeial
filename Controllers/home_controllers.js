//Format: module.exports.actionName = function(req,res){}

module.exports.home=function(req,res) {
    return res.redirect('/users/sign_in')
}


