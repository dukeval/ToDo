const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// class User {
//     constructor(userName,email,userId){
//         this.UserName = userName;
//         this.Email = email;
//         this.UserId = userId;
//     }
// }

let Users = {
    UserName: "",
    Email: "",
    UserId:""
}

let UserSchema = new Schema({
    UserName: {type:String, required:true, max:100},
    Email:  {type:String, required:true, max:100},
    UserId: {type:String, required:true, max:25}
});

module.exports = Users;
module.exports = mongoose.model('User', UserSchema);