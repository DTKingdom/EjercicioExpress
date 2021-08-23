/*Dylan Alexis Tobar Orellana*/ 
const express = require('express')
const app = express()
console.log('En Linea');

app.get('/', function (req, res){
    res.sendFile('C:/Users/dylan/Desktop/pagina/Express/Pagina ejemplo/Principal.html')
})
app.listen(3000)

