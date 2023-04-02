const mongoose = require('mongoose')
const express = require('express')
const app = express()
var routes = require('./routes/routes')

//use node.js to connect  
mongoose.set ('strictQuery', false);
const URI = 'mongodb+srv://ANdyjp:Creutiliazz@cluster0.6zw7cmp.mongodb.net/?retryWrites=true&w=majority'

async function connect () {
    try{
        await mongoose.connect(URI);
        console.log('Connected To MongoDb')
    } catch (error) {
        console.log(error);
    }
}
connect()

// app.use(cors (
//     {
//         origin: 'http://localhost:3000'
//     }
// ));
//connection 
// app.listen (3000, () => {
    // console.log('serve started on port 8000')
// })

app.listen(3000,function check (error){
    if (error)
    console.log('errorrrr')
    else
    console.log('started')
}
);

// mongoose.connect('mongodb://localhost:27017/gameapp',{userNewUrlParser: true, useUnifiedTopology: true},
// function checkbd(error)
// {
//     if(error)
//     {
//         console.log('error connecting to DB');
//     }
//     else{
//         console.log('conected to MongoDB');
//     } 

// })

app.use(express.json());
app.use(routes);
