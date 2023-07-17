const express=require('express')
const mysql=require('mysql')
const app=express()
const cors=require('cors')

app.use(express.json())
app.use(cors())
app.listen(3000)
const con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'mern'
    }
)

app.post('/logi',(req,res)=>{
    const que="SELECT * FROM elin WHERE uname=? and pwd=?"
    const uname=req.body.uname
    const pwd=req.body.pwd

    con.query(que,[uname,pwd],(err,result)=>{
        if(err){
            throw err
        }if(result.length>0){
                res.send({Login:true})

            }else{
                res.send({Login:false})
        }
        })

})





app.post('/logi1',(req,res)=>{
    const que="SELECT * FROM emp_table WHERE name=? and pwd=?"
    const name=req.body.name
    const pwd=req.body.pwd

    con.query(que,[name,pwd],(err,result)=>{
        if(err){
            throw err
        }if(result.length>0){
                res.send({Login:true})

            }else{
                res.send({Login:false})
        }
        })

})










app.post('/logi2',(req,res)=>{
    const que="SELECT * FROM stlog WHERE regno=? and dob=?"
    const regno=req.body.regno
    const dob=req.body.dob

    con.query(que,[regno,dob],(err,result)=>{
        if(err){
            throw err
        }if(result.length>0){
                res.send({Login:true})

            }else{
                res.send({Login:false})
        }
        })

})



app.post('/savead',function(req,res)
{
    const uname=req.body.uname
    const pwd=req.body.pwd
    const gender=req.body.gender

    con.query("insert into elin(uname,pwd,gender) values(?,?,?)",[uname,pwd,gender],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Inserted Successfully")
        }
    })
})


app.post('/savesf',function(req,res)
{
    const name=req.body.name
    const email=req.body.email
    const pwd=req.body.pwd
    const gender=req.body.gender
    const age=req.body.age
    const subject=req.body.subject

    con.query("insert into emp_table(name,email,pwd,gender,age,subject) values(?,?,?,?,?,?)",[name,email,pwd,gender,age,subject],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Inserted Successfully")
        }
    })
})










app.post('/savest',function(req,res)
{
    const regno=req.body.regno
    const name=req.body.name
    const gender=req.body.gender
    const dob=req.body.dob
    const city=req.body.city

    con.query("insert into stlog(regno,name,gender,dob,city) values(?,?,?,?,?)",[regno,name,gender,dob,city],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Inserted Successfully")
        }
    })
})




app.get('/adview',function(req,res)
{
    con.query("select * from elin",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})

app.get('/sfview',function(req,res)
{
    con.query("select * from emp_table",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})

app.get('/complaint',function(req,res)
{
    con.query("select * from complaint",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})



app.get('/stview',function(req,res)
{
    con.query("select * from stlog",(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})


// app.get('/result/:regno',function(req,res)
// {
//     const regno=req.body.regno
//     con.query("select regno,name,m1,m2,m3,m4,m5 from stlog where regno=?",[regno],(err,result)=>{
//         if(err){
//             throw err
//         }
//         else{
//             res.send(result)
//         }
//     })
// })

app.get('/result',(req,res)=>{
    const que="SELECT regno,name,m1,m2,m3,m4,m5 FROM stlog WHERE regno=? and dob=?"
    const regno=req.body.regno
    const dob=req.body.dob

    con.query(que,[regno,dob],(err,result)=>{
        if(err){
            throw err
        }if(result.length>0){
                res.send({result})

            }else{
                res.send({err})
        }
        })

})




app.delete('/deleteAd/:id',function(req,res){
    const id=req.params.id
    con.query("delete from elin where id=?",[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send("Deleted Successfully")
        }
    })
})


app.delete('/deleteSf/:id',function(req,res){
    const id=req.params.id
    con.query("delete from emp_table where id=?",[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send("Deleted Successfully")
        }
    })
})


app.delete('/deleteSt/:id',function(req,res){
    const id=req.params.id
    con.query("delete from stlog where id=?",[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send("Deleted Successfully")
        }
    })
})

app.delete('/deleteComp/:id',function(req,res){
    const id=req.params.id
    con.query("delete from complaint where id=?",[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send("Deleted Successfully")
        }
    })
})


app.get('/adread/:id',function(req,res){
    const query="select * from elin where id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})


app.get('/sfread/:id',function(req,res){
    const query="SELECT * FROM emp_table WHERE id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})

app.get('/stread/:id',function(req,res){
    const query="SELECT * FROM stlog WHERE id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})


app.get('/staread/:id',function(req,res){
    const query="select * from complaint where id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})



app.get('/stmark',function(req,res){
    const query="SELECT * FROM stlog WHERE id=?"
    const id=req.params.id
    con.query(query,[id],(err,result)=>{
        if(err){
            throw err
        }
        else{
            res.send(result)
        }
    })
})



app.put('/adupdate/:id',function(req,res){
    const query="UPDATE elin SET uname=?,pwd=?,gender=? WHERE id=?"
    const id=req.params.id

    const uname=req.body.nuname
    const pwd=req.body.npwd
    const gender=req.body.ngender

    con.query(query,[uname,pwd,gender,id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.put('/sfupdate/:id',function(req,res){
    const query="UPDATE emp_table SET name=?,email=?,pwd=?,gender=?,age=?,subject=? WHERE id=?"
    const id=req.params.id

    const name=req.body.nname
    const email=req.body.nemail
    const pwd=req.body.npwd
    const gender=req.body.ngender
    const age=req.body.nage
    const subject=req.body.nsubject

    con.query(query,[name,email,pwd,gender,age,subject,id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.put('/stupdate/:id',function(req,res){
    const query="UPDATE stlog SET regno=?,name=?,gender=?,dob=?,city=?,m1=?,m2=?,m3=?,m4=?,m5=? WHERE id=?"
    const id=req.params.id

    const regno=req.body.nregno
    const name=req.body.nname
    const gender=req.body.ngender
    const dob=req.body.ndob
    const city=req.body.ncity
    const m1=req.body.nm1
    const m2=req.body.nm2
    const m3=req.body.nm3
    const m4=req.body.nm4
    const m5=req.body.nm5

    con.query(query,[regno,name,gender,dob,city,m1,m2,m3,m4,m5,id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})


app.put('/staupd/:id',function(req,res){
    const query="UPDATE complaint SET name=?,email=?,gender=?,category=?,prblm=?,status=? WHERE id=?"
    const id=req.params.id

    const name=req.body.nname
    const email=req.body.nemail
    const gender=req.body.ngender
    const category=req.body.ncategory
    const prblm=req.body.nprblm
    const status=req.body.nstatus

    con.query(query,[name,email,gender,category,prblm,status,id],(err,result)=>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})


app.post('/forgot',function(req,res)
{
    const name=req.body.name
    const email=req.body.email
    const gender=req.body.gender
    const category=req.body.category
    const prblm=req.body.prblm
    

    con.query("insert into complaint(name,email,gender,category,prblm) values(?,?,?,?,?)",[name,email,gender,category,prblm],(err,result)=>{
        if(err){
            throw err
        }
        else{
            console.log("Complaint Added")
        }
    })
})