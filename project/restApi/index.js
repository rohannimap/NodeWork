const { log } = require("console");
const express  = require("express")
const app = express()
const port  = 8080
const path = require("path")
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.listen(port,()=>{
    console.log(`app listen on ${port}`);
    
})
let posts = [
    {
        id :"1",
        username:"rohanhakke",content:"hello everyone"
    },
    {
        id :"2",
        username:"aniketmore",content:"i am student"
    },
    {
        id :"3",
        username:"gauravsalgude",content:"i am worker"
    }
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
 })
app.get("/posts/new",(req,res)=>{
    res.render("newPost.ejs")
 })
 app.post("/posts",(req,res)=>{
    // console.log(req.body);
    let {username,content} = req.body
    posts.push({username,content})
    // res.send("Post succesfuly! ")
    res.redirect("/posts")
 })
 app.get("/posts/new/:id",(req,res)=>{
    // console.log(req.params);
    let {id} = req.params
    post = posts.find((p)=> id ===p.username)
    // console.log(post);
    
    res.render("show.ejs",{post})
 })