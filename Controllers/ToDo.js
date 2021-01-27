const todoModel = require('../Models/ToDo');
const userCtrl = require('../Controllers/User');
const userModel = require('../Models/User');

function createNewUser(user){
    const newUser= new userModel({
        UserName: user.UserName,
        Email: user.Email,
        UserId: user.UserId
    });

    return userCtrl.createNewUser(newUser);
    // newUser.save(function(err){
    //     if(err){
    //         return next(err);
    //     }

    //     return true;
    // });
}

exports.test = function(req,res){
    res.send('Testing todo');
}

exports.getToDos = function(req,res){
    todoModel.find(function(err,todo){
        if(err)
            return next(err);
        
        res.send(todo);
    });    
}

exports.getToDoByID = function(req,res){
    todoModel.findById(req.params.id, function(err, todo){
        if(err){
            return next(err);
        }

        res.send(todo);
    });
}

exports.newToDo = function(req,res){
    //if passed in user is in the DB, get the information else create a new user.
    userModel.findOne({UserName: req.body.UserName.UserName}).count(function(err,count){
        if(err)
            return next(err);

        if(count===0)
        {
            if(createNewUser(req.body.UserName))
                return next("Unable to create todo for user.  User is not valid.");
        }
    });

    const newToDo = new todoModel({
        Title: req.body.Title,
        DueByDate: req.body.DueByDate,
        Completed: req.body.Completed,
        Active: true,
        CreatedOn: Date.now(),
        UserName: req.body.UserName.UserName, 
    });

    newToDo.save(function(err){
        if(err)
            return next(err);
        
        res.send(`${newToDo.Title} was successfully added to your ToDo list.`);
    });
}

exports.updateToDo = function(req,res){
    todoModel.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err, todo){
        if(err)
            return next(err);
        
        res.send(`${req.body.Title} ToDo was updated successfully.`);
    });
}

exports.deleteToDo = function(req,res){
    //find the todo and set the Active flag to false;
    todoModel.findById(req.params.id,function(err,todo){
        if(err)
            return next(err);

        todo.Active = false;

        todo.save(function(err){
            if(err)
                return next(err);
            
            res.send(`ToDo was deleted successfully.`);
        });
    })
    
}