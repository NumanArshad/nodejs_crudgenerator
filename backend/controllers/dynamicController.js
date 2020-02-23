const model = require('../models/dynamicModel')
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'






exports.CreateModel = (req, res) => {
    console.log(req.body.FirstName)
    model.findOne({ FirstName: req.body.FirstName }, (err, account) => {
        if (err) {
            res.status(500).send({ 'CreateStatus': 'Failure', 'error': err })
        }
        if (account == undefined || account == null) {
            let newModel = new model(req.body)
            newModel.save((err, account) => {
                if (err) {
                    console.log(err)
                    res.status(500).send({ 'CreateStatus': 'Failure', 'error': err })
                }
                if (account) {
                    console.log("success", account.FirstName)
                    res.status(200).send({ 'CreateStatus': 'Success', 'data': account })
                }
            })
        }
    })
}

exports.Readxls=(req,res)=>{
    MongoClient.connect(url, function (err, dbo) {
    if (err) {
     console.log('no connection error is', err)
    //    res.status(200).send({'fetchStatus':'failed','err':err})  
    }
    else {
      //  console.log("mongoClient connection success")
     var db = dbo.db('mydb')
     console.log("mongoClient connection success")
    }
// db.collection('Movies').find({}).toArray(function(error,account){
//     if(error){
//         console.log("error")
//     }
//     else if(account!==undefined){
//         const XLSX=require('xlsx')
//         const workbook=XLSX.readFile('F:\\ANN\\Churn_Modelli.csv')
//         const sheet_name_list=workbook.SheetNames
//         const data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
//        console.log(data)
//     res.status(200).send({'fetchStatus':'success','data':data})  
//     }
//})
  

//}
})
}

exports.getAll = (req, res) => {
    model.find({}, (err, account) => {
        if (account !== undefined) {
            res.status(200).send({ 'getStatus': 'success', 'list': account })
        }
    })
}
exports.Readxls=(req,res)=>{
    
    db.collection('Movies').find({}).toArray(function(err,account){
        if(err){
            res.status(200).send({ 'getStatus': 'failure', 'error': err })
        }
        else{
           
            try{
                const XLSX=require('xlsx')
                const workbook=XLSX.readFile('F:\\ANN\\Churn_Modelling.csv')
                const sheet_name_list=workbook.SheetNames
                const data=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
                console.log(data)
               
            res.status(200).send({ 'getStatus': 'success', 'list': account })
        }
        catch(err){
            res.status(200).send({ 'getStatus': 'failure', 'error': err })
        }
    
    }})
    
    
    
   // console.log()
}

exports.addField = (req, res) => {
    // model.ag
    // model.aggregate({$addFields:{LastName:''}},(err,account)=>{
    //     if(!err){
    //         res.status(500).send({'addStatus':'failed',"error":err})
    //     }
    //     else if(account!==undefined || account !==null){
    //         res.status(200).send({'addStatus':'success',"data":account})
    //     }
    // })
    model.aggregate([
        {
            $addFields: {

                LastName: "hahah"
            }
        }
    ], (err, account) => {
        if (err) {
            console.log(err)
            res.status(500).send({ 'addStatus': 'failed', "error": err })
        }
        else if (account !== undefined || account !== null) {
            res.status(200).send({ 'addStatus': 'success', "data": account })
        }

    })
}


exports.upload=(req,res)=>{
console.log("called",req.files.file)
    res.status(200).send({'success':'uploaded'})
}

