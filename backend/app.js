// app.js
const cors = require('cors');
const express = require("express");
var path = require('path')
const bodyParser = require("body-parser");
var config = require("./config/db");
const loginController = require("./controllers/LoginController");
const registerController = require("./controllers/RegisterController");
const todoController = require("./controllers/todoController.js");
const QBankController = require("./controllers/QBankController.js");
const coll = require('./config/collectiondb.js')
const app = express();
const port = process.env.PORT || 3301;
app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
const XLSX = require('xlsx');
const multer = require('multer');
var fileName=''
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public');
  },
  filename: function (req, file, cb) {
    //  cb(null, Date.now() + '_' + file.originalname);
    console.log(file.originalname,"is name of file")
    fileName=file.originalname;
    cb(null, file.originalname);
    
  },
});

const upload = multer({ storage: storage }).single('file');




app.post('/upload', function (req, res) {
 //console.log(req.file.originalname)

  MongoClient.connect(url, function (err, dbo) {
    if (err) {
      console.log('no connection error is', err)
    }
    else {
      console.log("mongoClient connection success")

      db = dbo.db('mydb')
      upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          console.log("server upload error")
          return res.status(500).json(err);
        } else if (err) {
          console.log("server upload server")
          return res.status(500).json(err);
        }
        console.log("success")
        try {
          const workbook = XLSX.readFile('public/'+fileName);
          const sheet_name_list = workbook.SheetNames;
          const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
          console.log("uploaded file is",fileName)
          console.log(data);
          //   db.collection('Movies').find({}, { projection: { phone: 1 } }).toArray(function (err, account) {
        db.collection('Movies').insertMany(data, (err, account) => {
           if (err) {
             console.log("fect failue")
          }
            else {
              //  postman console.log("success", account)
console.log('success insert')
         //     res.status(200).json({ 'insertdata': 'success', 'data': er })
         db.collection('Movies').find({}).toArray(function (er, list) {
          if (er) {
            res.status(200).json({ 'fetchData': 'failure', 'error': er })
          }
          else {
            console.log(list)
            res.status(200).json({ 'fetchData': 'success','Alldata': list });
          }
        })

       }
         })
     

        } catch (e) {
          console.log('file read error:', e);
        }


      //  return res.status(200).send(req.file);
      });
    }
  }
  )
});

app
  .route("/getData")
  .get(coll.getData)

app
  .route("/api/Accounts/SignIn")
  .post(loginController.handleSignInAttempt)

app
  .route("/api/Accounts/Register")
  .post(registerController.handleRegister)

app
  .route("/api/Accounts/getAll")
  .get(loginController.getAllAccounts)
app
  .route("/api/Accounts/postAll")
  .post(todoController.postAll)
app
  .route("/api/Accounts/findAll")
  .get(todoController.findAll)
app
  .route("/api/Accounts/getOne/:userId")
  .get(todoController.getOne)

app
  .route("/api/Accounts/delOne/:userId")
  .post(todoController.delOne)
app
  .route("/api/Accounts/postQuestion")
  .post(QBankController.saveQuestion)
app
  .route("/api/Accounts/findQuestion")
  .get(QBankController.findQuestion)
app
  .route("/api/Accounts/getOne/:userId")
  .get(QBankController.getQuestion)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
