import  express from "express"
import mysql from "mysql"
import { config } from 'dotenv';
import cors from 'cors'
config();





const app=express()


const db = mysql.createConnection({

    host:process.env.REACT_APP_HOST,
    user:process.env.REACT_APP_USER,
    password:process.env.REACT_APP_PASSWORD,
    database:process.env.REACT_APP_DATABASE


})
app.use(express.json())
app.use(cors())





app.get("/campaign", (req,res)=>{

    db.query("select ID,CAMPAIGNNAME  from CAMPAIGN where CAMPAIGNSTATUSCODE=1 and ISDELETE=0", (err,result)=>{
            if(err) {
                console.log(err)
            }
            res.send(result)
        }
    );
});   var i = 21;


app.post("/campaign/:ID",(req, res) => {


    const cmpID=req.params.ID

    console.log(req.body.alias)

    const q = "INSERT INTO test(id) VALUES (?);"
    const values=[req.body.amount]
    db.query(q,[values],(err,data)=>{
        if(err)return res.json(err);
        return res.json(data)



    })

})

app.listen(8800,()=>{



    console.log("Connceted to Backend..!")
})