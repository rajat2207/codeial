const User= require('../Models/user.js')

//render the profile page
module.exports.profile=function(req,res){
    return res.render('user_profile',{
        'title': 'SocioPolis | Profile'
    })
}


//render the sign in page
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        'title' : 'SocioPolis | Sign In'
    });
}

//render the sign up page
module.exports.signUp=function (req,res) {

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        'title': 'SocioPolis | Sign Up'
    })
    
}

//create a new account in the datatbase
module.exports.create=function(req,res) {
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email},function (err,user) {
        if(err){
            console.log('error in finding the user in signing up');
            return;
        }

        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log('error in creating the user in signing up');
                    return;
                }

                return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
        
    })
}

//sign in and create a session for the user
module.exports.createSession= function (req,res) {
    return res.redirect('/');
}