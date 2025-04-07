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
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
 })
let posts = [
    {
username:"rohanhakke",content:"hello everyone"
},
    {
username:"aniketmore",content:"i am student"
},
    {
username:"gauravsalgude",content:"i am worker"
}
]
