const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QBankModel = new Schema({
  userId:{type: Schema.Types.ObjectId,ref:'todoModel'},
  //todolist:{type:String,default:''}
    courseName:{type:String,default:''},
   topic:{type:String,default:''},
    Question:{type:String,default:''},
    fstOption:{type:String,default:''},
    secOption:{type:String,default:''},
    thrdOption:{type:String,default:''},
    frthOption:{type:String,default:''},
    ans:{type:String,default:''}
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
module.exports = mongoose.model(" QBankModel",  QBankModel);

