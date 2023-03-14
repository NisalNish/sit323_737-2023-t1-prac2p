const express = require("express");
const res = require("express/lib/response");
const app = express();
const AddTwoNumber = (n1,n2) =>{
    return n1+n2;
}
app.get("/AddTwoNumber", (req,res)=>{
    const n1 = parseInt(req.query.n1);
    const n2 = ParseInt(req.query.n2);
    const result = AddTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result});
});
console.log(AddTwoNumber(19,12));
const port = 3040;
app.listen(port,()=>{
    console.log("Hello i'm nisa wijekoon"+ port);

})