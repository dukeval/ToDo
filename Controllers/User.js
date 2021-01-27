const userModel = require('../Models/User');

function createNewUser(user){
    const newUser= new userModel({
        UserName: user.UserName,
        Email: user.Email,
        UserId: user.UserId
    });

    newUser.save(function(err){
        if(err){
            return next(err);
        }

        return true;
    });
}

exports.newUser = function(req,res){
    if(createNewUser(req.body.UserName)){
        res.send(`User, ${req.body.UserName.UserName}, was successfully created.`);
    }
}

exports.getUserByUserID = function(req,res){
    userModel.findOne({UserId: req.params.userId},function(err,usr){
        if(err)
        {
            return next(err);
        }

        res.send(usr);
    });
}

module.exports.createNewUser = createNewUser;