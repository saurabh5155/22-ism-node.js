function add(a,b){
    console.log("Addition : "+(a+b));
}

function sub(a,b){
    console.log("Subtaction : "+(a-b));
}

function mul(a,b){
    console.log("Multiplication : "+(a*b));
}


function div(a,b){
    console.log("Divition : "+(a/b));
}

add(12,9)

module.exports.addition = add
module.exports.sub = sub
module.exports.myl = mul
module.exports.div = div