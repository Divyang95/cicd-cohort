const express = require('express');  

const app = express() 

const PORT = process.env.PORT || 3000 

app.get('/', (req,res) => {
    res.send('Hello World')
}) 

app.get("/chai", (req,res) => {
    res.send('Hello Chai World')
});

// app.get("/crash", (req,res) => {
//     res.send('App is crashing.....')
//     process.exit(1)
// }); 

//take input from param and return it back 
app.get("/:id", (req,res) => {
    res.send(`Hello World ${req.params.id}`);       
}); 



//only listen if not in test 
if(require.main === module){
    app.listen(PORT, ()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
}

module.exports = app; 
