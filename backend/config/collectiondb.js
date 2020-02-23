var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'
const XLSX = require('xlsx');
exports.getData = (req, res) => {

    MongoClient.connect(url, function (err, dbo) {
        if (err) {
            console.log('no connection error is', err)
        }
        else {
            console.log("mongoClient connection success")

            db = dbo.db('mydb')
            //db.createCollection('Movies')
            // db.collection('Movies').insertOne({phone:68676},(err,res)=>{
            //     if(err){
            //         console.log('insert failed',err)
            //     }
            //     else{
            //         console.log("data insert success",res)
            //     }
            // })

            //  db.collection('Movies').find({},{projection:{phone:1}}).toArray(function(err,res){  
            //  projection 0 mean to exclude that and 1 mean to include that field




         //   try {
             //   const workbook = XLSX.readFile('public/1564127340076_Churn_Modelling.csv');
              //  const sheet_name_list = workbook.SheetNames;
              //  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
              //  console.log(data.length);
                //   db.collection('Movies').find({}, { projection: { phone: 1 } }).toArray(function (err, account) {
            // db.collection('Movies').insertMany(data, (err, account) => {
            //        if (err) {
            //         console.log("fect failue")
            //         }
            //        else {
                 //  postman console.log("success", account)

                        db.collection('Movies').find({}).toArray(function (er, list) {
                            if (er) {
                                res.status(200).json({ 'fetchData': 'failure', 'error': er })
                            }
                            else{
                                console.log(list.length)
                            res.status(200).json({ 'fetchData': 'success', 'data': list });
                            }
                        })

                 }
//                 })

// } catch (e) {
//                 console.log('file read error:', e);
//             }
       
//         }

    }
    )


}



