var async = function(){
    setTimeout(function () { log("i an coming jhefiuhduihiue dvkhbsdiv sdhvisdv isdhcvisdvc kjsdvsdv now")}, 2000)
}
var adder = function(first, second){
    var sum = first + second
}
var log  = function(msg){
    console.log("[Log]: ", msg)
}
log("the sum is "+ adder(5,6))
async();
log("This is going to come before afrer previous one")
