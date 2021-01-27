const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = {
    UserName: "",
    Email: "",
    UserId:""
}

//Changed the requested "Status" field from the project requirement to Completed since that made more 
//sesnse to me based on the explanation given.  To me status field is a bit confusing as it implies 
//that you can have more than one status for your todo, meaning that your todo can be in different stages.  
//After requesting some more info in the chat, it seems to me that the "Status" field is more of a state 
//which represents whether the task/todo is completed.  In that sense the more meaningfull and direct name 
//for that field would be either completed or isCompleted or some variation of the task's state.  
//If thinking of this field from a UI point of view, it would be represented by a checkbox 
//which has only two states, true or false.
const todoSchema = new Schema({
    Title: {type:String, max:100, required:true},
    DueByDate: {type:Date, required:true},
    CreatedOn: {type: Date},
    Completed:{type:Boolean, default:false},
    Active:{type:Boolean},
    UserName: {type:User}
});

module.exports = mongoose.model('ToDo', todoSchema);