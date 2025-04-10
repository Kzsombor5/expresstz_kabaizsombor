const express = require("express")
const app = express()
const mysql = require("mysql")
const bodyparser = require("body-parser")
const cors = require("cors")

app.use(cors())
app.use(bodyparser.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password : "",
    database : "fogado" 
})

app.get("/", (req, res) =>{
    const sql = "SELECT * FROM szobak"
    db.query(sql, (err,result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.get("/Szende", (req, res) =>{
    const sql = "SELECT * FROM szobak WHERE sznev='Szende'"
    db.query(sql, (err,result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
})

app.get("/fo", (req, res) =>{
    const sql = "SELECT * FROM foglalasok ORDER BY fo"
    db.query(sql, (err,result) =>{
        if(err) return res.json(err)
        return res.json(result)
    })
})



app.listen(3000 ,() => {
    console.log("A szerver fut a 3000-es porton")
} )
