

const express= require ("express");
const bodyParser= require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true})); 
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.post('/', (req, res) => {
    var number= req.body.year;
    if (number%4!=0){
        res.write("<h1>It's Not a Leap year</h1>")
    }else if (number%100!=0){
        res.write("<h1>It's a leap year</h1>")
    }else if(number%400===0) {
        res.write("<h1>It's a leap year</h1>")
    }else{
        res.write("<h1>Not a leap year!</h1>")
    }
    res.end();
    res.send("<h2>Thank you for using our services!</h2>")
    
})


app.listen(port, () => {
  console.log(`App is up and running at http://localhost:${port}`)
})