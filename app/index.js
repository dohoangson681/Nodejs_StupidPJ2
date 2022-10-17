const express = require("express") ; 
const app = express() ; 
let port = 3000 ; 
app.set('view engine', 'hbs');
app.get("/" , (req , res) => {
        // res.send("Map Box") ;
        res.render('mapbox') ;  
})
app.listen(port)
console.log("MapBox") ; 