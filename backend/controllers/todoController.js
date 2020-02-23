const todoController = require("../models/todoModel.js");
const Login = require("../models/Login");


exports.postAll = (req, res) => {
  console.log("creating todo")
    console.log(req.body.userId);
Login.findOne({_id:req.body.userId}).exec(function(err,users){
  if(err) {
    console.log("error in server"+err)
    res.status(500).json({'itemStatus':'Failure','err':err});
  }
  else {
        
    let todo = new todoController(req.body);
    console.log("adding .....");
    todo.save((err,data)=>{
      if(err) {
        console.log("here",err);
        res.status(500).json({'itemStatus':'Failure','err':err});
      }
      else {
        console.log("***",data);
        res.status(200).json({'itemStatus':'created',courseId:data._id,'data':data});
      }
    })
  }
})
};

exports.findAll = (req, res) => {
    console.log("get all todos")
    todoController.find()
    .then(todos => {
        res.send(todos);
    }).catch(err => {
        res.status(500).json({'itemStatus':'created','err':err});
    });
};

exports.getOne = (req ,res) => {
  console.log("getting one");`` 
  query ={userId:req.params.userId};
  todoController.find(query)
  .then(todos => {
        console.log(todos);
        res.status(200).json({'itemStatus':'created','todoList':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'itemStatus':'Failure','err':err});
    });
};
exports.delOne =(req,res) => {
  console.log("deletting One");
  query ={_id:req.params.userId};
  todoController.deleteOne(query)
  .then(todos => {
        res.status(200).json({'itemStatus':'deleted','todolist':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'itemStatus':'Failure','err':err});
    });
}