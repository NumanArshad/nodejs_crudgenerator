const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToDoModel = new Schema({
  userId:{type: Schema.Types.ObjectId,ref:'LoginAccount'},
  //todolist:{type:String,default:''}
    courseName:{type:String,default:''},
    courseDescription:{type:String,default:''}
  


});
// LoginAccount.pre('save', function (next) {
//   var user = this;
//   bcrypt.hash(user.password, 10, function (err, hash){
//     if (err) {
//       return next(err);
//     }
//     user.password = hash;
//     next();
//   })
// });
module.exports = mongoose.model("ToDoModel", ToDoModel);

