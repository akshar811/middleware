const express = require("express");
const check = require("./check");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db = [{ name:"akshar",course:"full stack",grid:"1301",id:1 }]

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the middleware server");
});

app.get("/student", (req, res) => {
  res.status(200).send(db);
})
app.get("/index",(req, res) => {
  res.sendFile(__dirname + "/index.html");
})

app.post("/student",check,(req, res) => {
    let newstudent = {
      name : req.body.name,
      course : req.body.course,
      grid : req.body.grid,
      id : db.length+1
    }
    db.push(newstudent)
    res.status(200).send(newstudent);
   
  
  });

app.listen(8090, () => {
    console.log("listening on port 8090");
  });
  

//   res.status(200).send(`
//   <h1>Submitted Form Data</h1>
//   <p>Name: ${newstudent.name}</p>
//   <p>Course: ${newstudent.course}</p>
//   <p>Grid: ${newstudent.grid}</p>
//   <p>ID: ${newstudent.id}</p>
//   <a href="/index">Go back to the form</a>
// `);