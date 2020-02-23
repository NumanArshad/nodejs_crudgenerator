const QBankController = require("../models/QBankModel.js");
const Todo = require("../models/todoModel");


exports.saveQuestion = (req, res) => {
  console.log("creating question bank")
    //console.log(req.body.userId);
Todo.findOne({userId:req.body.userId}).exec(function(err,users){
  if(err) {
    console.log("error in server"+err)
    res.status(500).json({'itemStatus':'Failure','err':err});
  }
  else {
        
    let todo = new QBankController (req.body);
    console.log("adding .....");
    todo.save((err,data)=>{
      if(err) {
        console.log("here",err);
        res.status(500).json({'itemStatus':'Failure','err':err});
      }
      else {
        console.log("***",data);
        res.status(200).json({'itemStatus':'created','data':data});
      }
    })
  }
})
};

exports.findQuestion = (req, res) => {
    console.log("get all todos")
   QBankController.find()
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        res.status(500).json({'itemStatus':'created','err':err});
    });
};

exports.getQuestion = (req ,res) => {
  console.log("getting one");`` 
  query ={courseId:req.params.courseId};
  QBankController.find(query)
  .then(todos => {
        console.log(todos);
        res.status(200).json({'itemStatus':'created','courseName':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'itemStatus':'Failure','err':err});
    });
};
exports.delOne =(req,res) => {
  console.log("deletting One");
  query ={_id:req.params.userId};
  QBankController.deleteOne(query)
  .then(todos => {
        res.status(200).json({'itemStatus':'deleted','todolist':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'itemStatus':'Failure','err':err});
    });
}